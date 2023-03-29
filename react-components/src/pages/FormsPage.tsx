import React from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';

class FormsPage extends FormsTemplate {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      birthDate: '',
      contact: '',
      selectLanguage: '',
      rendered: false,
    };
  }
  userNameHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('name handler fired');

    this.setState({
      userName: value,
    });
  };
  dateOfBirthHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      birthDate: value,
    });
  };

  contactHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    this.setState({
      contact: value,
    });
  };
  selectLanguageHandler = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectLanguage: value,
    });
  };
  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(value);
    this.setState({
      rendered: true,
    });
  };

  render() {
    return (
      <FormsTemplate
        NameInput={this.userNameHandler}
        BirthInput={this.dateOfBirthHandler}
        LanguageInput={this.selectLanguageHandler}
        ContactInput={this.contactHandler}
        StateData={this.state.userName}
      />
    );
  }
}

export default FormsPage;
