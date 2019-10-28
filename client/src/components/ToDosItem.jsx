import React, { useState, useEffect } from "react";

const ToDosItem = ({ task, onDelete, onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(task.status !== "pending" ? true : false);
  }, [task]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input type="checkbox" checked={isChecked} onChange={onCheck}></input>
        </div>
        <div className="col-4">
          <h3>{task.title}</h3>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDosItem;
