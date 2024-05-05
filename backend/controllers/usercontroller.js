import User from "../models/userSchema.js";

export const Register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.create({
    username,
    email,
    password,
  });

  // token for the user
  const token = await user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
};

export const Login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Username and password is required",
    });
  }

  // for the selected username also check password
  const user = await User.findOne({
    username,
  }).select("+password");

  if (!user) {
    res.status(400).json({
      success: false,
      message: "Username not found.",
    });
  }

  // checking using comp pw from userchema

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    res.status(400).json({
      success: false,
      message: "Invalid password.",
    });
  }

  const token = await user.getJWTToken();

  res.status(200).json({
    success: true,
    token,
  });
};
