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
  // const [inputValidation, setInputValidation] = useState({ helperText: '', error: false });
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
    // if (!inputValidation.error) {
    const searchDiv = searchFieldRef.current;
    props.searchValue(searchDiv!.value);
    // }
  };

  // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log('input has changed', event.target.value);
  //   if (/([a-zA-z]{20,})$/.test(event.target.value)) {
  //     setInputValidation({ helperText: '', error: false });
  //   } else {
  //     setInputValidation({ helperText: 'Symbols not allowed', error: true });
  //   }
  // };

  return (
    <TextInput
      // helperText={inputValidation.helperText}
      // error={inputValidation.error}
      // onChange={onChangeHandler}
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
