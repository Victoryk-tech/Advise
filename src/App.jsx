import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // import an api and save it in a variable called "getAnAdvice"
  async function getAnAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    // const res = fetch("https://api.adviceslip.com/advice");
    // const data = (await res).json();
    // console.log(data);
    const advice = await response.data.slip;
    setAdvice(advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAnAdvice();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center my-auto bg-[#1b1f24] P-6 w-full h-full pb-[14rem]">
      <div className="flex flex-col text-center items-center justify-cente text-white mt-[10rem]  gap-3 w-[50%] p-5 border-none outline-none shadow-[0_0_5px_#13bbff] bg-[#2d343f]   rounded-[8px]">
        <p className="font-bold">Advice # {advice.id}</p>
        <h1 className="text-[1rem] text-center w-[80%]">{advice.advice}</h1>
        <p>
          you have read <strong>{count}</strong> of advice
        </p>
        <button
          className="inline-block py-[11px] px-[26px] bg-mainColor text-bgColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-in hover:bg-[transparent] hover:text-mainColor hover:shadow-[0_0_20px_#13bbff] mt-3 "
          onClick={getAnAdvice}
        >
          Get Advice
        </button>
      </div>
    </div>
  );
}
