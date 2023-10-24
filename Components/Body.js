"use client";
import React, { useState } from "react";

const Body = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Storing the title & desc
  const [mainTask, setMainTask] = useState([]);

  // Add item handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent refreshing the page while submitting the form
    // console.log(title)
    // console.log(desc)
    setMainTask([...mainTask, { title, desc }]); // Adding title & desc
    setTitle(""); // Setting title to null after adding one item
    setDesc(""); // Setting desc to null after adding one item
    console.log(mainTask);
  };

  // Showing items on screen
  let randerTask = (
    <h2 className="pt-5 pb-5 pl-24 pr-24 mt-4">No items available</h2>
  );
  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between w-screen pt-5 pb-5 pl-24 pr-24 mt-4"
        >
          <div className="flex items-center justify-between w-2/3">
            <h2 className="flex items-center text-2xl font-bold text-center">
              {t.title}
            </h2>
            <h2 className="flex items-center text-xl font-semibold">
              {t.desc}
            </h2>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 text-white px-5 py-2 rounded-xl"
          >
            Delete item
          </button>
        </li>
      );
    });
  }

  // Delete items from screen
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  return (
    <>
      <div className="body">
        <form
          onSubmit={submitHandler}
          className="flex items-center justify-between pt-5 pb-5 pl-24 pr-24"
        >
          <div className="flex items-center justify-start w-2/3">
            <input
              type="text"
              placeholder="Enter title"
              className="px-4 py-2 border-black border-2 border-solid rounded-md"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Enter description"
              className="ml-4 px-4 py-2 border-black border-2 border-solid rounded-md w-2/3"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>

          <button className="bg-green-800 text-white px-5 py-2 rounded-xl">
            Add item
          </button>
        </form>

        <div className=" bg-red-100">{randerTask}</div>
      </div>
    </>
  );
};

export default Body;
