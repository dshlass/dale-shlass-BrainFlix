verifyApiKey = req => {
  if (!req.query.api_key) {
    return "403 Not Authorized";
  }
};

module.exports = verifyApiKey