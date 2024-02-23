import React, { useState } from "react";

function ClickMe1Home() {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("No");
  const [clickedYes, setClickedYes] = useState(false);
  const [gifURL, setGifURL] = useState(
    "https://i.pinimg.com/originals/94/88/0f/94880f91a2ea53425e506329bb2514e9.gif"
  );
  const [text, setText] = useState("Don't click No!!");
  const fontSize = count * 20 + 16;
  const textPhrase = [
    "NO!!",
    "NO!!!!",
    "NO!!😡",
    "I SAID NO!!😡",
    "DON'T PRESS NO!!",
    "PLEASE DON'T!!",
    "OK, THAT'S ENOUGH!!!",
    "NO MEANS NO!!!!!😡😡",
  ];

  const getButtonText = () => {
    return textPhrase[Math.min(count, textPhrase.length - 1)];
  };
  const handleYesClick = () => {
    setGifURL(
      "https://i.pinimg.com/originals/3c/34/07/3c3407953ce994ae8b6da09e996b2172.gif"
    );
    setText("GOOD JOB!!!");
    setClickedYes(true);
  };
  const handleNoClick = () => {
    setButtonText(getButtonText());
    setCount(count + 1);
  };

  return (
    <>
      <div className="overflow-hidden flex flex-col items-center justify-center h-screen selection:bg-rose-600 selection:text-white text-zinc-900 bg-[url('/bg1.webp')]">
        <img className="h-[230px] rounded-lg shadow-lg" src={gifURL} />
        <h1 className="text-4xl md:text-6xl my-4 text-center font-serif">
          {text}
        </h1>
        {!clickedYes && (
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: fontSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              onClick={handleNoClick}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ClickMe1Home;
