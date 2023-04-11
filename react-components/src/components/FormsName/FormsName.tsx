import React from 'react';

type IProps = object;
type IState = {
  userName: string;
};

class FormsName extends React.Component<IProps, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  userNameHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userName: value,
    });
  };

  render() {
    return (
      <div>
        <label>
          Name:
          <input
            name="userName"
            value={this.state.userName}
            onChange={this.userNameHandler}
          ></input>
        </label>
      </div>
    );
  }
}

export default FormsName;
