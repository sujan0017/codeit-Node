import { createAuthToken } from "../helpers/authHelpers.js";
import authService from "../services/authService.js";

const register = async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.password) {
    res.status(422).send("Required data are missing");
  }

  if (data.password !== data.confirmPassword) {
    return res.status(400).send("confirm password do not match");
  }

  if (data.password.length < 6) {
    return res.status(400).send("Password length must be greater then 6");
  }
  try {
    const user = await authService.register(data);

    const authToken = createAuthToken(user);

    res.cookie("authToken", authToken, { httpOnly: true });

    res.status(201).json({ ...user, authToken });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const data = req.body;

  try {
    const user = await authService.login(data);

    const authToken = createAuthToken(user);

    res.cookie("authToken", authToken, { httpOnly: true });

    res.status(201).json({ ...user, authToken });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { register, login };
