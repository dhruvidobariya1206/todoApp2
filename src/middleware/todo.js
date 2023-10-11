

export function isAuth(req, res, next) {
  if (!req.session.user) {
    res.status(401).send({
      code: "Unauthorised",
      message: "Validation required",
    });
  } else {
    next();
  }
}
