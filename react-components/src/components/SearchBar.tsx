import { InputAdornment, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const TextInput = styled(TextField)`
  display: flex;
  justifycontent: center;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IType {}
interface IState {
  userInput: string;
}

class SearchBar extends React.Component<IType, IState> {
  constructor(props: string) {
    super(props);

    this.state = {
      userInput: localStorage.getItem('search') || '',
    };
  }

  componentDidMount() {
    this.setState({
      userInput: `${localStorage.getItem('search')}`,
    });
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.userInput);
  }

  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        userInput: event.target.value,
      });
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
        onChange={handleChange}
        value={this.state.userInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}

export default SearchBar;
