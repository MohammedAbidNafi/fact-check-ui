"use client";
import React, { useState } from "react";
import Back from "./back";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("");
  const [response, setResponse] = useState("");
  const [factData, setFactData] = useState(false);

  const placeholders = [
    "MI has qualified in IPL",
    "Japan has created a prototype of 6G Network",
    "Most Indians are Vegetarian.",
    "Eating carrots improves eyesight",
    "Putin has invaded Poland",
  ];

  const checkFact = async () => {
    setLoading(true);
    const queryParams = new URLSearchParams({
      q: `${fact}`,
    });
    try {
      const res = await fetch("http://localhost:1234/factcheck?" + queryParams);

      const data = await res.json();
      setResponse(data.response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setFactData(true);
    setLoading(false);
  };

  const clearAll = () => {
    setFact("");
    setResponse("");
    setFactData(false);
  };
  return (
    <>
      <motion.div
        animate
        transition={{ duration: 0.5 }}
        layout
        className="flex flex-col w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] items-center relative bg-gray-800 px-2 md:px-10 py-10 rounded-xl backdrop-blur-xl bg-opacity-40 shadow-xl"
      >
        {!factData ? (
          <>
            <h1 className="text-3xl mb-10 text-white">FactGuru</h1>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => setFact(e.target.value)}
              onSubmit={checkFact}
              onLoad={loading}
            />
          </>
        ) : (
          <>
            <TextGenerateEffect
              words={response}
              className="text-white text-2xl"
            />
            <button
              className="mt-5 p-3 border-2 border-gray-500 text-white rounded-xl border-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-purple-500 hover:bg-opacity-50 transition duration-200 ease-in-out"
              onClick={clearAll}
            >
              Ask Another
            </button>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Main;
