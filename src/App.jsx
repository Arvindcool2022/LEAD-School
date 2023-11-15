import { useState, useEffect } from 'react';
import Form from './components/Form';
import Details from './components/Details';
import ErrorComp from './components/Error';

function App() {
  const [details, setDetails] = useState();
  const [inputData, setInputData] = useState({
    pincode: 0,
    countryCode: 'AF',
    ready: false
  });

  const [err, setErr] = useState(false);
  const [bg, setBg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.zippopotam.us/${inputData.countryCode}/${inputData.pincode}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setDetails(data);
        setErr(false);
        setBg('bg-emerald-500');
      } catch (error) {
        console.error('Error fetching data:', error);
        setErr(true);
        setBg('bg-rose-500');
      }
    };
    if (inputData.ready && inputData.pincode) {
      fetchData();
    }
  }, [inputData]);

  return (
    <main className={bg + ' bg-opacity-10'}>
      <section className="h-[100vh] w-1/2 mx-auto flex justify-center items-center flex-col gap-10">
        <Form setInputData={setInputData} inputData={inputData} />
        <Details
          data={details}
          error={err}
          setDetails={setDetails}
          setBg={setBg}
        />
        {err && <ErrorComp />}
      </section>
    </main>
  );
}

export default App;
