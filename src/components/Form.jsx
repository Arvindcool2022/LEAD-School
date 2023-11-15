import JSON_DATA from '../data/ISO3166-1.alpha2.json';

const Form = ({ setInputData, inputData }) => {
  const countryData = JSON_DATA;

  const findKeyByValue = value => {
    return Object.keys(countryData).find(key => countryData[key] === value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputData.pincode) setInputData({ ...inputData, ready: true });
  };

  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4  p-4 rounded-lg "
      >
        <div className="p-2">
          <label htmlFor="#country" className="font-semibold capitalize">
            Country
          </label>
          <select
            className="border ms-3 rounded px-2"
            name="countryName"
            id="country"
            onChange={e => {
              setInputData({
                ...inputData,
                countryCode: findKeyByValue(e.target.value),
                ready: false
              });
            }}
          >
            {Object.values(countryData).map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2 flex w-full gap-3">
          <label htmlFor="#pincode" className="font-semibold capitalize">
            pincode
          </label>
          <input
            className="flex-1 border rounded px-2 outline-none"
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Example: 600001 or AD001"
            onChange={e => {
              setInputData({
                ...inputData,
                ready: false,
                pincode: e.target.value
              });
            }}
          />
        </div>
        <button className="text-sm font-semibold py-2 px-4 bg-stone-700 text-white rounded transition-all duration-200 ease-in-out hover:scale-105 active:scale-95">
          Get Details
        </button>
      </form>
    </section>
  );
};

export default Form;
