const Error = () => {
  return (
    <div className="py-3 px-8">
      <h1 className="text-center font-semibold text-2xl">
        Oops something went wrong
      </h1>
      <h2 className="text-center font-semibold text-slate-700 capitalize">
        try again
      </h2>
      <div>
        <span>Tips:</span>
        <ul className="text-slate-600 list-disc ps-5">
          <li>Check if Country and pincode matches</li>
          <li>Pincode could be wrong</li>
          <li>
            The{' '}
            <a
              href="#"
              className="text-blue-700 decoration-solid hover:underline"
            >
              zippopotam
            </a>
            's database might not be upto date
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Error;
