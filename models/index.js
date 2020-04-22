const db_con = require("../configs/mysql");

module.exports = {
  recordgame: (data) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < 2; i++) {
        let name = data.clubname[i];
        let points = data.clubpoints[i];
        db_con.query(
          `SELECT * FROM tb_clubs WHERE club_name = '${name}'`,
          (error, result) => {
            if (result[0] !== undefined) {
              console.log("halo", result);
              db_con.query(
                `UPDATE tb_clubs SET club_points = ${
                  result[0].club_points + points
                } WHERE club_name='${name}'`,
                (error, result) => {
                  if (error) reject(new Error(error));
                  resolve(result);
                }
              );
            } else {
              db_con.query("ALTER TABLE tb_clubs AUTO_INCREMENT=0");
              db_con.query(
                `INSERT INTO tb_clubs VALUES( '${name}', ${points})`,
                (error, result) => {
                  if (error) reject(new Error(error));
                  resolve(result);
                }
              );
            }
          }
        );
      }
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      db_con.query(
        `SELECT club_name as clubname, club_points as points FROM tb_clubs`,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
};
