"use strict";
var mongoose = require("mongoose"),
  Task = mongoose.model("Task", "Tasks");

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};
exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) {
        return res.send(err);
      }
      res.json(task);
    }
  );
};
exports.delete_a_task = function(req, res) {
  Task.deleteOne({ _id: req.params.taskId }, function(err, task) {
    if (err) {
      returnres.send(err);
    }
    if (task.deletedCount > 0)
      res.json({ message: "Task successfully deleted" });
    else {
      res.json({ message: "Task to delete not found" });
    }
  });
};
