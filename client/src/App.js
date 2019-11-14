import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDos from "./components/ToDos";
import axios from "axios";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [search, setSearch] = useState(0);

  useEffect(() => {
    console.log("inside effect");
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3005/tasks");
      console.log(response.data);
      setToDos(response.data);
    };

    fetchTasks();
  }, [search]);

  const addTask = async task => {
    const response = await axios.post("http://localhost:3005/tasks", task);
    console.log("Response from addTask ", response);
  };

  const removeTask = async id => {
    const response = await axios.delete(`http://localhost:3005/tasks/${id}`);
    console.log("Response from removeTask", response);
  };

  const updateTask = async (id, task) => {
    const response = await axios.put(`http://localhost:3005/tasks/${id}`, task);
    console.log("Response from updateTask", response);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    let task = {
      title: inputValue,
      Created_Date: Date.now,
      status: "pending"
    };
    await addTask(task);
    setSearch(search + 1); //Fetching all Tasks again
  };

  const onDelete = async id => {
    await removeTask(id);
    setSearch(search + 1); //Fetching all Tasks again
  };

  const onCheck = async id => {
    let task = {
      status:
        toDos.find(e => e.id === id).status !== "pending"
          ? "pending"
          : "complete"
    };
    await updateTask(id, task);
    setSearch(search + 1); //Fetching all Tasks again
  };
  return (
    <div className="App">
      <Form
        onInputChange={handleChange}
        inputValue={inputValue}
        handleClick={handleClick}
      />
      <ToDos todos={toDos} onDelete={onDelete} onCheck={onCheck} />
    </div>
  );
};

export default App;
