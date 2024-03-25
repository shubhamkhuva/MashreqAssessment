import type { NextApiRequest, NextApiResponse } from "next";
import { select } from "./lib/connect";
import { decryptString } from "@/utils/security";
import { getRequestAuth } from "./lib/helper";
import { headers } from "next/headers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    let response: any = {};
    let encryData = getRequestAuth(req);
    let authReq = decryptString(encryData);
    if (authReq !== null) {
      let authReqObj = JSON.parse(authReq);

      let SELECT_QUERY = `SELECT FULL_NAME, EMAIL, USERNAME FROM Users WHERE EMAIL = '${authReqObj.username}' OR USERNAME = '${authReqObj.username}' AND PASSWORD = '${authReqObj.password}'`;
      const selectQuery: any = await select(SELECT_QUERY);

      if (
        (Array.isArray(selectQuery) && selectQuery.length > 0) ||
        Object.keys(selectQuery).length > 0
      ) {
        response = {
          status: "success",
          data: selectQuery,
        };
      } else {
        response = {
          status: "error",
          errorCode: "INVALID_AUTHENTICATION",
        };
      }
    } else {
      response = {
        status: "error",
        errorCode: "SYSTEM_ERROR",
      };
    }

    res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
