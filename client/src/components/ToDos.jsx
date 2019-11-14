import React, { Component } from "react";
import ToDosItem from "./ToDosItem";

const ToDos = ({ todos, onDelete, onCheck }) => {
  return (
    <div>
      {todos.map(e => {
        return (
          <ToDosItem
            key={e.id}
            task={e}
            onCheck={f => {
              f.preventDefault();
              onCheck(e.id);
            }}
            onDelete={f => {
              f.preventDefault();
              onDelete(e.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ToDos;
