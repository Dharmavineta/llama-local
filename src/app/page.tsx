"use client";
import { getData } from "@/actions/actions";
import React from "react";

const Home = () => {
  const handleClick = async () => {
    const res = await getData();
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
