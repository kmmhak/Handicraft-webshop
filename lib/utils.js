import crypto from "crypto";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const genJwt = (user) => {
  const newJwt = jwt.sign(
    {
      sub: user.rows[0].id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    process.env.SECRET
  );
  return { token: `Bearer ${newJwt}` };
};

export const genSaltHash = (password) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt,
    hash,
  };
};

export const validPassword = (password, hash, salt) => {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
};

export const isAdmin = (role) => {
  if (role !== "admin") {
    return false;
  }
  return true;
};

export const result = (response, code) => ({ response, code });
