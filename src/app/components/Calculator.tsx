"use client";

import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [piceSet, setPice] = useState(0);
  const [totalFragment, setTotalFragment] = useState(0);
  const [previousTierFragments, setPreviousTierFragments] = useState(0);
  const [previousTierPieces, setPreviousTierPieces] = useState(0);
  const [numberSlime, SetNumberSlime] = useState(0);


  const handleSetChange = (events: any) => {
    setPice(parseInt(events.target.value));
  };

  const calculateFragments = () => {
    const fragmentPerPice = 80;
    const fragmentPerCraft = 100;

    const result = piceSet * fragmentPerCraft;
    const piceBurn = Math.ceil((result * 2) / fragmentPerPice);
    const fragmentEarned = piceBurn * fragmentPerPice;

    setTotalFragment(result);
    setPreviousTierFragments(fragmentEarned);
    setPreviousTierPieces(piceBurn);
    SetNumberSlime(piceBurn);
  };

  const reset = () => {
    setTotalFragment(0);
    setPreviousTierFragments(0);
    setPreviousTierPieces(0);
    SetNumberSlime(0);
    setPice(0);
  };

  return (
    <div className="bg-slate-800 max-h-lvh max-w-2xl flex-row rounded-md mx-auto py-5">
      <h3 className="mx-5 ">Fragment Calculator</h3>
      {/* Frist section -> input calculator */}
      <div className="mx-5 my-5 ">
        <div className="flex-row items-center">
          <div className="flex justify-around">
            <span> Number of pieces to craft</span>
          </div>
          <div className=" flex justify-around">
            <input
              type="number"
              className=" text-black w-14 rounded  my-3 pl-2 shadow-sm justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:appearance-none "
              value={piceSet}
              onChange={handleSetChange}
            />
          </div>
          <div className="flex justify-evenly my-3">
            <button
              className="bg-lime-800 p-2 rounded "
              onClick={calculateFragments}
            >
              Calculate
            </button>
            <button className="bg-red-800 p-2 px-4 rounded" onClick={reset}>
              Reset
            </button>
          </div>
          {/* Second section -> result */}
          <div>
            {/*  <ResultBox/> */}
            <div className="bg-slate-500 p-1 rounded items-center flex flex-row justify-center mb-2">
              <span> Total fragments for crafting: </span>
              <span className="ml-2">{totalFragment}</span>
            </div>
            <div  className="bg-slate-500 p-1 rounded items-center flex flex-row justify-center mb-2">
              <span>Fragments earned per burn: </span>
              <span className="ml-2">{previousTierFragments}</span>
            </div>
            <div  className="bg-slate-500 p-1 rounded items-center flex flex-row justify-center mb-2">
              <span>Number of lower tier pieces to burn:</span>
              <span className="ml-2"> {previousTierPieces} </span>
            </div>
            <div  className="bg-slate-500 p-1 rounded items-center flex flex-row justify-center mb-2">
              <span>Slime for crafting: </span>
              <span className="ml-2">{numberSlime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
