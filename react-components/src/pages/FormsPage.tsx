import React, { ChangeEvent, useEffect, useState } from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';
import style from './FormsPage.module.css';
// import { useForm } from 'react-hook-form';

const keyName = 'card';
let keyCounter = 0;
const FormsPage = () => {
  const [userName, setUserName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [contact, setContact] = useState(['']);
  const [contactSms, setContactSms] = useState(false);
  const [contactMail, setContactMail] = useState(false);
  const [gender, setGender] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allData, setAllData] = useState([
    {
      userName: '',
      birthDate: '',
      gender: '',
      contact: [''],
      selectLanguage: '',
      id: '',
      imageUrl: '',
    },
  ]);

  useEffect(() => {
    contactSms
      ? setContact((prevState) => [...prevState, 'sms'])
      : setContact((prevState) => prevState.filter((item) => item !== 'sms'));
  }, [contactSms]);
  useEffect(() => {
    contactMail
      ? setContact((prevState) => [...prevState, 'mail'])
      : setContact((prevState) => prevState.filter((item) => item !== 'mail'));
  }, [contactMail]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    const currentInput = {
      userName: `${userName}`,
      birthDate: `${birthDate}`,
      gender: `${gender}`,
      contact: [`${contact}`],
      selectLanguage: `${selectLanguage}`,
      imageUrl: `${selectedImage}`,
      id: `${keyName} ${keyCounter}`,
    };
    isSubmitted
      ? setAllData((prevState) => [...prevState, currentInput])
      : setAllData([currentInput]);
    keyCounter++;
  };
  const userNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const dateOfBirthHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const contactHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.id === 'c01'
      ? setContactSms(event.target.checked)
      : event.target.id === 'c02'
      ? setContactMail(event.target.checked)
      : null;
  };
  const selectLanguageHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectLanguage(event.target.value);
  };

  const genderHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource>('');
  const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files instanceof FileList ? setSelectedImage(event.target.files[0]) : null;
    console.log(event);
  };
  // const { register } = useForm();

  return (
    <>
      <FormsTemplate
        NameInput={userNameHandler}
        BirthInput={dateOfBirthHandler}
        LanguageInput={selectLanguageHandler}
        ContactInput={contactHandler}
        SubmitHandler={submitHandler}
        GenderInput={genderHandler}
        FileUpload={fileUpload}
        UserNameState={userName}
        BirthDateState={birthDate}
        ContactState={contact}
        GenderState={gender}
        selectLanguageState={selectLanguage}
        // Register={register}
      />
      <div>
        {isSubmitted &&
          allData.map((item) => {
            return (
              <div className={style.newCard} key={item.id}>
                <div>{item.userName}</div>
                <div>{item.birthDate}</div>
                <div>{item.contact}</div>
                <div>{item.gender}</div>
                <div>{item.selectLanguage}</div>
                <div>
                  <img src={URL.createObjectURL(selectedImage)}></img>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FormsPage;
