import Cookies from "js-cookie";

export const getAuthCookies = () => {
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  if (token?.trim() && id?.trim()) {
    return { token, id };
  }
  return null;
};