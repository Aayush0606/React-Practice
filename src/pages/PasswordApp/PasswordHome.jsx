import { useCallback, useEffect, useState } from "react";

export default function PasswordHome() {
  const [currPassword, setCurrPassword] = useState("abcdsdsd");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [alphanumeric, setAlphanumeric] = useState(false);
  const num = "1234567890";
  const dig = "zxcvbnmlkjhgfdsaqwertyuiop";
  const alpha = "!@#$%^&*()_=-+|}{[]';/?.>,<`~";

  const generatePassword = useCallback(() => {
    let fullStr = dig;
    if (number) fullStr += num;
    if (alphanumeric) fullStr += alpha;
    let newPass = "";
    for (let i = 0; i < length; i++) {
      newPass += fullStr[Math.floor(Math.random() * fullStr.length)];
    }
    setCurrPassword(newPass);
  }, [length, alphanumeric, number]);

  useEffect(() => {
    generatePassword();
  }, [length, alphanumeric, number]);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-[45em] h-[15em]  rounded-xl">
          <div className="flex flex-col  align-center m-4 gap-6">
            <div className="h-[3em] flex gap-4">
              <input
                type="text"
                name="password"
                id="password"
                value={currPassword}
                disabled
                className="basis-5/6 rounded-xl p-2 bg-slate-100"
              />
              <input
                type="button"
                value="copy"
                className="bg-blue-500 hover:cursor-pointer basis-1/6 rounded-xl"
                onClick={() => navigator.clipboard.writeText(currPassword)}
              />
            </div>
            <div className="h-[5em] flex gap-4">
              <div className="basis-4/6 rounded-xl   flex items-center">
                <input
                  type="range"
                  name="length"
                  id="lengthRange"
                  min={8}
                  max={20}
                  value={length}
                  step={1}
                  onChange={(e) => setLength(e.target.value)}
                  className="basis-4/6"
                />
                <div className="basis-2/6 ml-2 text-slate-300">
                  Length {length}
                </div>
              </div>
              <div className="basis-1/6 rounded-xl  flex items-center">
                <input
                  type="checkbox"
                  checked={number}
                  onChange={() => setNumber(!number)}
                  className="bg-blue-500 hover:cursor-pointer basis-1/6 rounded-xl"
                />
                <div className="text-slate-300">Number</div>
              </div>
              <div className="basis-1/6 rounded-xl  flex items-center">
                <input
                  type="checkbox"
                  onChange={() => setAlphanumeric(!alphanumeric)}
                  checked={alphanumeric}
                  className="bg-blue-500 hover:cursor-pointer basis-1/6 rounded-xl"
                />
                <div className="text-slate-300">Alphanumeric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
