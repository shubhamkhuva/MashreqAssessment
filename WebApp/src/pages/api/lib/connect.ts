import { getPool } from "./db";

export async function select(query: string) {
  try {
    const [result] = await (await getPool()).execute(query);
    if (Array.isArray(result)) {
      return result.length > 0 ? result[0] : [];
    } else {
      console.error("Unexpected result type:", result);
      return null;
    }
  } catch (e: any) {
    console.error(e);
    if (e.code === "ER_HOST_NOT_PRIVILEGED") {
      throw e;
    }
    return null;
  }
}

export async function execute(query: string) {
  try {
    const [result]: any = await (await getPool()).execute(query);
    return {
      affectedRows: result.affectedRows,
      insertId: result.insertId,
    };
  } catch (e: any) {
    if (e.code === "ER_HOST_NOT_PRIVILEGED") {
      throw e;
    }
    return null;
  }
}
