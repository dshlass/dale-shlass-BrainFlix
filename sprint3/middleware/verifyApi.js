verifyApiKey = (req, res, next) => {
  if (!req.query.api_key) {
    res.status(403).json({
      message: "403 Not Authorized"
    })
  } else {
    next()
  }
};

module.exports = verifyApiKey