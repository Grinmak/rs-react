import { Button, InputAdornment, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { Dispatch, FormEventHandler, SetStateAction } from 'react';
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
  const storedSearchValue = useAppSelector((state) => state.searchValue.inputValue);
  const dispatch = useAppDispatch();

  const searchFieldRef = React.useRef<HTMLInputElement | null>(null);
  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (searchFieldRef.current) {
      // console.log('submit:', searchFieldRef.current.value);
      props.loadingMessage(true);
      dispatch(addRequestValue(searchFieldRef.current.value));
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
    >
      <TextInput
        sx={{
          width: { lg: '30%', sm: '70%' },
        }}
        type="text"
        label="Search"
        id="search-field"
        variant="outlined"
        defaultValue={storedSearchValue || ''}
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
