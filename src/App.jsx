import { useEffect, useState } from 'react';
import './App.css';
import RandomPic from './components/RandomPic';
import SelectBreed from './components/SelectBreed';

function App() {
  const [catImgUrl, setCatImgUrl] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch(fetchUrl);
      const result = await response.json();
      setCatImgUrl(result[0].url);
    }
    getRandomImage();
  }, []);

  const updateImage = async () => {
    console.log("updateImage function is being called!");
    const response = await fetch(fetchUrl);
    const result = await response.json();
    setCatImgUrl(result[0].url);
  };

  console.log(selectedBreed);

  const API_URL = `https://api.thedogapi.com/v1/images/search`;
  const queryString = `?breed_ids=${selectedBreed}`;

  const fetchUrl = selectedBreed === ''
    ? API_URL
    : API_URL + queryString;

  console.log(fetchUrl);

  return (
    <>
      <SelectBreed selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <br /><br />
      {/* then, fetch the breeds list and update the input to use the list of available breeds */}
      <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage} />
    </>
  );
}

export default App;