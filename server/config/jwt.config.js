const jwt = require("jsonwebtoken");
module.exports.authenticate = (req, res, next) => {
  const secret = process.env.SECRET_KEY || "the34O02xxngKQ59MECo0imR0R";

  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};

  
  