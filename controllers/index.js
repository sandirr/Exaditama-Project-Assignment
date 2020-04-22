const models = require("../models/index");
const helpers = require("../helpers/index");

module.exports = {
  recordgame: async (req, res) => {
    try {
      const { clubhomename, clubawayname, score } = req.body;
      const eachScore = score.split(":");
      let clubhomepoints;
      let clubawaypoints;
      if (parseInt(eachScore[0].trim()) > parseInt(eachScore[1].trim())) {
        clubhomepoints = 3;
        clubawaypoints = 0;
      } else if (
        parseInt(eachScore[1].trim()) > parseInt(eachScore[0].trim())
      ) {
        clubhomepoints = 0;
        clubawaypoints = 3;
      } else {
        clubhomepoints = 1;
        clubawaypoints = 1;
      }

      const data = {
        clubname: [clubhomename, clubawayname],
        clubpoints: [clubhomepoints, clubawaypoints],
      };

      await models.recordgame(data);

      helpers.response(res, 200, "Success. Game has been recorded", req.body);
    } catch (error) {
      if (error) console.log(error);
      helpers.customErrorResponse(res, 404, "Not Found!");
    }
  },
  leaguestanding: async (req, res) => {
    try {
      const result = await models.getAll();

      await result.sort(function (a, b) {
        return b.points - a.points;
      });

      res.json(result);
    } catch (error) {
      if (error) console.log(error);
      helpers.customErrorResponse(res, 404, "Not Found!");
    }
  },
  clubstanding: async (req, res) => {
    try {
      const clubname = req.query.clubname;
      const result = await models.getAll();

      await result.sort(function (a, b) {
        return b.points - a.points;
      });

      const data = result;
      let index = data
        .map(function (e) {
          return e.clubname;
        })
        .indexOf(clubname);
      if (++index === 0) helpers.customErrorResponse(res, 404, "Not Found!");
      else {
        const show = result[--index];
        delete show.points;
        show.standing = ++index;
        res.json([show]);
      }
    } catch (error) {
      if (error) console.log(error);
      helpers.customErrorResponse(res, 404, "Not Found!");
    }
  },
};
