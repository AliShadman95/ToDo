import React, { Component } from "react";
import ToDosItem from "./ToDosItem";

const ToDos = ({ todos, onDelete, onCheck }) => {
  return (
    <div>
      {todos.map(e => {
        return (
          <ToDosItem
            key={e._id}
            task={e}
            onCheck={f => {
              f.preventDefault();
              onCheck(e._id);
            }}
            onDelete={f => {
              f.preventDefault();
              onDelete(e._id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ToDos;
