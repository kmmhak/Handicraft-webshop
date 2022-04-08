import { config } from "dotenv";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
config();
import pool from "../db/dbConfig.js";

const extractJwt = ExtractJwt;

export const authJwt = async (req, jwtPayload, done) => {
  const user = await pool.query("SELECT * FROM users WHERE id=$1", [
    jwtPayload.sub,
  ]);

  if (user.rows.length < 1) {
    return done(null, false);
  }
  req.user = user.rows[0];
  return done(null, user.rows[0]);
};

export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    passReqToCallback: true,
  },
  (req, jwtPayload, done) => {
    authJwt(req, jwtPayload, done);
  }
);

export const passportJwt = () =>
  passport.authenticate("jwt", {
    session: false,
  });
