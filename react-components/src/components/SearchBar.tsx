import { Button, InputAdornment, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addRequestValue } from '../store/searchSlice';

const TextInput = styled(TextField)`
  display: flex;
  justifycontent: center;
`;

type ISearchBar = {
  loadingMessage: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = (props: ISearchBar) => {
  const searchValue = useAppSelector((state) => state.searchValue.inputValue);
  const dispatch = useAppDispatch();

  const searchFieldRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchDiv = searchFieldRef.current;
    if (searchDiv) {
      searchDiv.value = searchValue || '';
      dispatch(addRequestValue(searchDiv.value));
    }
  });

  const SubmitHandler = () => {
    props.loadingMessage(true);
    const searchDiv = searchFieldRef.current;
    dispatch(addRequestValue(searchDiv!.value));
  };

  return (
    <form
      onSubmit={SubmitHandler}
      style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
    >
      <TextInput
        sx={{
          width: { lg: '30%', sm: '70%' },
        }}
        label="Search"
        id="search-field"
        variant="outlined"
        inputRef={searchFieldRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button type="submit">
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
// }

export default SearchBar;
