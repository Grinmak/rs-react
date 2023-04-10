import { Button, InputAdornment, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { Dispatch, SetStateAction } from 'react';

const TextInput = styled(TextField)`
  display: flex;
  justifycontent: center;
`;

type ISearchBar = {
  searchValue: Dispatch<SetStateAction<string>>;
};

const SearchBar = (props: ISearchBar) => {
  const searchFieldRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const searchDiv = searchFieldRef.current;
    if (searchDiv) {
      searchDiv.value = localStorage.getItem('search') || '';
      props.searchValue(searchDiv.value);
      return () => {
        localStorage.setItem('search', searchDiv.value);
      };
    }
  });
  const SubmitHandler = () => {
    const searchDiv = searchFieldRef.current;
    // searchDiv && (searchDiv.value = localStorage.getItem('search') || '');
    props.searchValue(searchDiv!.value);
    // console.log('submitAction', searchFieldRef!.current!.value);
  };

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
            <Button onClick={SubmitHandler}>
              <SearchIcon />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
// }

export default SearchBar;
