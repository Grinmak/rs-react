import SearchBar from '../components/SearchBar';
import CardTemplate from '../components/CardTemplate';
import CardData from '../components/CardData';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '10px',
          width: {
            lg: '40vw',
            md: '60vw',
            sm: '100vw',
          },
          justifyContent: 'space-around',
        }}
      >
        <CardTemplate {...CardData[0]} />
        <CardTemplate {...CardData[1]} />
        <CardTemplate {...CardData[2]} />
      </Box>
    </>
  );
};

export default HomePage;
