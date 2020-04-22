const express = require("express");
const Route = express.Router();
const {
  recordgame,
  leaguestanding,
  clubstanding,
} = require("../controllers/index");

Route.post("/recordgame", recordgame)
  .get("/leaguestanding", leaguestanding)
  .get("/rank", clubstanding);

module.exports = Route;
