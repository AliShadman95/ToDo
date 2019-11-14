const { Client } = require("pg");
require("dotenv").config();
const moment = require("moment");
const client = new Client({
  user: "postgres",
  database: "tododb",
  password: process.env.PGPASSWORD
});
client.connect();

exports.list_all_tasks = function(req, res) {
  client.query("SELECT * FROM Tasks ORDER BY id", (err, task) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(task.rows);
    }
  });
};
exports.create_a_task = function(req, res) {
  console.log(req.body);
  var date = moment().format("YYYY-MM-DD");

  client.query(
    `INSERT INTO Tasks (title,created_date,status) VALUES ('${req.body.title}','${date}','${req.body.status}')`,
    (err, task) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.json(task.rows);
      }
    }
  );
};
exports.read_a_task = function(req, res) {};

exports.update_a_task = function(req, res) {
  console.log(req.body);
  client.query(
    `UPDATE Tasks SET status = '${req.body.status}' WHERE id = ${req.params.taskId}`,
    (err, task) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.json(task.rows);
      }
    }
  );
};

exports.delete_a_task = function(req, res) {
  client.query(
    `DELETE FROM Tasks WHERE id = ${req.params.taskId}`,
    (err, task) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.json(task.rows);
      }
    }
  );
};
