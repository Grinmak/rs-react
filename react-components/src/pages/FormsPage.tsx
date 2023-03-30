import React, { ChangeEvent, useState } from 'react';
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
const FormsPage = () => {
  const [userName, setUserName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [contact, setContact] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('');

  const submitHandler = () => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Before:', dataStorage);

    const currentInput = {
      userName: `${userName}`,
      birthDate: `${birthDate}`,
      contact: `${contact}`,
      selectLanguage: `${selectLanguage}`,
      id: `${keyName} ${keyCounter}`,
    };
    dataStorage.push(currentInput);
    keyCounter++;
    // this.setState({
    //   rendered: true,
    // });
    console.log('After :', dataStorage);
  };
  const userNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const dateOfBirthHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const contactHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContact(event.target.value);
  };
  const selectLanguageHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectLanguage(event.target.value);
  };

  return (
    <>
      <FormsTemplate
        NameInput={userNameHandler}
        BirthInput={dateOfBirthHandler}
        LanguageInput={selectLanguageHandler}
        ContactInput={contactHandler}
        SubmitHandler={submitHandler}
        UserNameState={userName}
        BirthDateState={birthDate}
        ContactState={contact}
        selectLanguageState={selectLanguage}
      />
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
    </>
  );
};

export default FormsPage;
