import type { NextApiRequest, NextApiResponse } from "next";
import { execute, select } from "./lib/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PUT") {
    let response: any = {};
    const { username, token } = req.body;

    let UPDATE_QUERY = `
        UPDATE 
            Users SET TOKEN = '${token}' WHERE username = '${username}'`;

    const updateQuery = await execute(UPDATE_QUERY);

    if (updateQuery?.affectedRows > 0) {
      response = {
        status: "success",
      };
    } else {
      response = {
        status: "error",
        data: [],
        errorCode: "FAILING_UPDATE",
      };
    }

    res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
