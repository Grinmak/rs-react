import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import RickAndMortyCard from '../components/RickAndMortyCard';

const HomePage = () => {
  const [dataFromApi, setDataFromApi] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((dataBase) => setDataFromApi(dataBase.results));
  }, []);

  return (
    <>
      <SearchBar />
      <RickAndMortyCard DataFromApi={dataFromApi} />
    </>
  );
};

export default HomePage;
