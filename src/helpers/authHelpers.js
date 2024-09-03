import jwt from "jsonwebtoken";

function createAuthToken(data) {
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return token;
}

export { createAuthToken };
