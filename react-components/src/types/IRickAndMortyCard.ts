type IRickAndMortyCard = {
  created: string;
  episode: string[];
  gender: string;
  id: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

export default IRickAndMortyCard;
