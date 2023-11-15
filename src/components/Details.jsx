const Details = ({ data, error, setDetails, setBg }) => {
  if (!data || error) return null;
  return (
    <div>
      <div className=" flex justify-between">
        <p className="pt-2">
          <span className="font-semibold">Country:</span>
          {data.country}
        </p>
        <button
          className="font-bold text-xl rotate-45"
          onClick={() => {
            setBg('');
            setDetails(null);
          }}
        >
          +
        </button>
      </div>
      <p className="font-semibold">Places</p>
      <ul className="ps-5 list-disc">
        {data.places.map(obj => (
          <li key={obj['place name']}>
            {obj['place name']}
            {' - '}
            <span className="text-xs text-slate-700">({obj.state})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
