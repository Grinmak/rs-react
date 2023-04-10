import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import RickAndMortyCard from '../components/RickAndMortyCard';

const HomePage = () => {
  const [userSearchValue, setUserSearchValue] = useState('');
  const [dataFromApi, setDataFromApi] = useState([]);
  const [listOfCharacher, setListOfCharacher] = useState([]);

  useEffect(() => {
    if (userSearchValue === '') {
      fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((dataBase) => setDataFromApi(dataBase.results));
    } else {
      const name = userSearchValue.toLowerCase();
      fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((res) => res.json())
        .then((dataBase) => dataBase.results && setDataFromApi(dataBase.results));
    }
  }, [userSearchValue]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((dataBase) => setListOfCharacher(dataBase.results));
  }, []);

  // useEffect(() => {
  //   console.log('SearchState:', userSearchValue);
  // }, [userSearchValue]);
  return (
    <>
      <SearchBar searchValue={setUserSearchValue} />
      <RickAndMortyCard DataFromApi={dataFromApi} />
    </>
  );
};

export default HomePage;
