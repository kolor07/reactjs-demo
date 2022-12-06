import http from "../axios";
import { backEnd } from "../utils/common";

export const checkLogin = async (email, pwd) => {
  return await http.post(backEnd.login, {
    email: email,
    password: pwd,
  });
};
