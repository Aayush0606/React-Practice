import { useEffect, useState } from "react";
import InputBox from "../../components/InputBox/InputBox";
import axios from "axios";
function CurrencyHome() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [countries, setCountries] = useState([]);

  const handleSwapClick = () => {
    const newTo = from;
    setFrom(to);
    setTo(newTo);
    setFromValue(0);
    setToValue(0);
  };
  const fetchCountry = () => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
      )
      .then((res) => Object.keys(res.data))
      .then((countryList) => setCountries(countryList))
      .catch((err) => console.log(err));
  };
  const handleConversion = () => {
    const parsed = parseFloat(fromValue);
    if (parsed == 0 || isNaN(parsed)) {
      alert("Enter a valid value");
      return;
    }
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
      )
      .then((res) => res.data[to])
      .then((data) => setToValue(parseFloat(fromValue) * data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center ">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleConversion();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  countries={countries}
                  currentCountry={from}
                  currentValue={fromValue}
                  setCurrentValue={setFromValue}
                  isReadOnly={false}
                  changeCountry={setFrom}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={handleSwapClick}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  countries={countries}
                  currentCountry={to}
                  currentValue={toValue}
                  setCurrentValue={setToValue}
                  isReadOnly={true}
                  changeCountry={setTo}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyHome;
