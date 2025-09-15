import crypto from "crypto";
export const genratePassword = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const idx = crypto.randomInt(0, chars.length);
    password += chars[idx];
  }
  return password;
};
