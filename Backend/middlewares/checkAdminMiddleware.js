export const checkAdminMiddleware = (res, req, next) => {
  const { token } = req.header("Authorization");

  if (!token) {
    return res.status(404).json({ message: "No token found" });
  }
  const role = "admin";
};
