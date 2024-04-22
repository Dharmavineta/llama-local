"use client";
import { getData } from "@/actions/actions";
import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const res = await getData(question);
    setText(res);
    setLoading(false);
  };
  return (
    <div>
      <div className="flex flex-col gap-2 w-fit">
        <input
          className="border-2"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="w-fit py-2 bg-rose-200 rounded-md px-5"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>

      <div>{loading && <h1>Loading...</h1>}</div>

      <pre>{text && text}</pre>
      {/* {text && <div dangerouslySetInnerHTML={{ __html: text }}></div>} */}
    </div>
  );
};

export default Home;
