import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { userTransformer } from "~~/server/transformers/user";
import { createRefreshToken } from "~~/server/db/refreshToken";

export default defineEventHandler(async (event) => {
  //handle post data to login
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "User or password is invalid",
      })
    );
  }

  //compare password
  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password is invalid",
      })
    );
  }
  //generate tokens
  //access token
  //refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  //save it into db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  //add http only cookie
  sendRefreshToken(event, refreshToken)

  return {
    user: userTransformer(user),
    accessToken,
  };
});
