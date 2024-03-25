import type { NextApiRequest, NextApiResponse } from "next";
import { execute, select } from "./lib/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { fullName, emailAddress, username, password } = req.body;

    let INSERT_QUERY = `
    INSERT 
    INTO 
    Users
        (
            FULL_NAME,
            EMAIL,
            USERNAME,
            PASSWORD
        )
    VALUES
        (
            '${fullName}',
            '${emailAddress}',
            '${username}',
            '${password}'
        )`;
    const insertQuery = await execute(INSERT_QUERY);

    let response: any = {};

    if (insertQuery?.affectedRows > 0) {
      response = {
        status: "success",
      };
    } else {
      response = {
        status: "error",
        data: [],
        errorCode: "FAILING_CREATE",
      };
    }

    res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
