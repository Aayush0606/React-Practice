import React, { useState } from "react";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ListItem from "../../components/ListItem/ListItem";
function TodoHome() {
  const [taskText, setTaskText] = useState([]);
  const [currText, setCurrText] = useState("");
  const handleChange = (e) => {
    setCurrText(e.target.value);
  };
  const handleSubmit = (e) => {
    if (currText == "") return;
    const key = Date.now();
    var newList = taskText;
    newList.push({ currText, key });
    setTaskText(newList);
    setCurrText("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  const handleDelete = (e) => {
    var newList = taskText.filter((item) => item.key != e.key);
    setTaskText(newList);
  };
  return (
    <>
      <div className="h-screen ">
        <div className="mt-32 w-full  flex justify-center">
          <TextBox
            placeholder="Enter task item"
            handleSubmit={handleKeyDown}
            handleChange={handleChange}
            currText={currText}
          />
          <Button placeholder="Add" handleSubmit={handleSubmit} type="add" />
        </div>
        <div className="mt-8 w-full flex justify-center">
          <ol type="A" className="w-1/3">
            {taskText.map((item) => (
              <ListItem
                key={item.key}
                item={item}
                handleDelete={handleDelete}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TodoHome;
