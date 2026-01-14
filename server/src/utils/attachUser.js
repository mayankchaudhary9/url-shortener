import short_urlDao from "../dao/short_url.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next();

  try {
    const decoded = verifyToken(token);
    const user = await short_urlDao.findUserById(decoded);
    if (!user) return next();
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};
