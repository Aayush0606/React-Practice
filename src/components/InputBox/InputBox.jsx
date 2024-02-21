function InputBox({
  label,
  currentCountry,
  currentValue,
  setCurrentValue,
  isReadOnly,
  changeCountry,
  countries = [],
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={label} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={label}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          readOnly={isReadOnly}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={currentCountry}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => changeCountry(e.target.value)}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
