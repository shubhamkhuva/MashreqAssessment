export const getRequestAuth = (req: any) => {
  try {
    let auth = req.headers["authorization"];
    return auth.substring(7);
  } catch (e) {
    return null;
  }
};
