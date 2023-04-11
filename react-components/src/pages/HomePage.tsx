import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import RickAndMortyCard from '../components/RickAndMortyCard';

const HomePage = () => {
  const [userSearchValue, setUserSearchValue] = useState('');
  const [dataFromApi, setDataFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //timeout  for cross-check
    setTimeout(() => {
      if (userSearchValue === '') {
        fetch('https://rickandmortyapi.com/api/character')
          .then((res) => res.json())
          .then((dataBase) => {
            setDataFromApi(dataBase.results);
            setIsLoading(false);
          });
      } else {
        const name = userSearchValue.toLowerCase();
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
          .then((res) => res.json())
          .then((dataBase) => {
            dataBase.results && setDataFromApi(dataBase.results);
            setIsLoading(false);
          });
      }
    }, 1000);
  }, [userSearchValue]);

  return (
    <>
      <SearchBar searchValue={setUserSearchValue} loadingMessage={setIsLoading} />
      {isLoading && (
        <div
          style={{
            width: '50%',
            boxShadow: '2px 2px 2px 2px gray',
            fontSize: '1.5rem',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '5px 25px',
          }}
        >
          Data is loading ...
        </div>
      )}
      <RickAndMortyCard DataFromApi={dataFromApi} />
    </>
  );
};

export default HomePage;
