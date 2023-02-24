const express = require("express");
const router = express.Router();
const path = require("path");
const createSocket = require(path.join(process.cwd(), "/services/socket"));

// Get user information
router.get(
  "/subscribe",
  // Parameter validation
  function (req, res, next) {
    if (!req.params.id) {
      return res.send("User ID cannot be empty");
    }
    if (isNaN(parseInt(req.params.id))) return res.json({ "sd": null, "code": 400, "dd": "User ID must be a number" });
    next();
  },
  function (req, res, next) {
    createSocket(res, next);
  }
);

module.exports = router;

