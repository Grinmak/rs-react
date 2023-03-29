import React from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';

const dataStorage = [
  {
    userName: '',
    birthDate: '',
    contact: '',
    selectLanguage: '',
    id: '',
  },
];

const keyName = 'card';
let keyCounter = 0;

class FormsPage extends FormsTemplate {
  constructor(
    props:
      | {
          NameInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          BirthInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          LanguageInput: ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => void;
          ContactInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          SubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
          UserNameState: string;
          BirthDateState: string;
          ContactState: string;
          selectLanguageState: string;
        }
      | Readonly<{
          NameInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          BirthInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          LanguageInput: ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => void;
          ContactInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
          SubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
          UserNameState: string;
          BirthDateState: string;
          ContactState: string;
          selectLanguageState: string;
        }>
  ) {
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
    const currentInput = {
      userName: `${this.state.userName}`,
      birthDate: `${this.state.birthDate}`,
      contact: `${this.state.contact}`,
      selectLanguage: `${this.state.selectLanguage}`,
      id: `${keyName} ${keyCounter}`,
    };
    dataStorage.push(currentInput);
    keyCounter++;
    this.setState({
      rendered: true,
    });
    console.log(dataStorage);
  };

  render() {
    return (
      <>
        <FormsTemplate
          NameInput={this.userNameHandler}
          BirthInput={this.dateOfBirthHandler}
          LanguageInput={this.selectLanguageHandler}
          ContactInput={this.contactHandler}
          SubmitHandler={this.submitHandler}
          UserNameState={this.state.userName}
          BirthDateState={this.state.birthDate}
          ContactState={this.state.contact}
          selectLanguageState={this.state.selectLanguage}
        />

        {/* <div> */}
        {dataStorage.map((item) => {
          return (
            <div className="newCard" key={item.id}>
              <div>{item.userName}</div>
              <div>{item.birthDate}</div>
              <div>{item.selectLanguage}</div>
              <div>{item.contact}</div>
            </div>
          );
        })}
        {/* </div> */}
      </>
    );
  }
}

export default FormsPage;
