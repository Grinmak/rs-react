import { InputAdornment, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const TextInput = styled(TextField)`
  display: flex;
  justifycontent: center;
`;

const SearchBar = () => {
  const searchFieldRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const searchDiv = searchFieldRef.current;
    if (searchDiv) {
      searchDiv.value = localStorage.getItem('search') || '';
      return () => {
        localStorage.setItem('search', searchDiv.value);
      };
    }
  });

  return (
    <TextInput
      sx={{
        width: { lg: '30%', sm: '70%' },
      }}
      label="Search"
      multiline
      id="search-field"
      variant="outlined"
      inputRef={searchFieldRef}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
// }

export default SearchBar;
