import React, { ChangeEvent, useEffect, useState } from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';
import style from './FormsPage.module.css';
// import { FieldValues, SubmitHandler } from 'react-hook-form';
// import { useForm } from 'react-hook-form';

const keyName = 'card';
let keyCounter = 0;
const FormsPage = () => {
  // const [userName, setUserName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  // const [contact, setContact] = useState(['']);
  // const [contactSms, setContactSms] = useState(false);
  // const [contactMail, setContactMail] = useState(false);
  // const [gender, setGender] = useState('');
  // const [selectLanguage, setSelectLanguage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | File | null>(null);

  const [allData, setAllData] = useState([
    {
      userName: '',
      birthDate: '',
      gender: '',
      contact: [''],
      selectLanguage: '',
      id: '',
      // imageUrl: URL.createObjectURL(selectedImage),
    },
  ]);

  // useEffect(() => {
  //   contactSms
  //     ? setContact((prevState) => [...prevState, 'sms'])
  //     : setContact((prevState) => prevState.filter((item) => item !== 'sms'));
  // }, [contactSms]);
  // useEffect(() => {
  //   contactMail
  //     ? setContact((prevState) => [...prevState, 'mail'])
  //     : setContact((prevState) => prevState.filter((item) => item !== 'mail'));
  // }, [contactMail]);

  // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   // const submitHandler = (data: SubmitHandler<FieldValues>) => {
  //   event.preventDefault();
  //   // console.log(data);

  //   setIsSubmitted(true);
  //   const currentInput = {
  //     userName: `${userName}`,
  //     birthDate: `${birthDate}`,
  //     gender: `${gender}`,
  //     contact: [`${contact}`],
  //     selectLanguage: `${selectLanguage}`,
  //     id: `${keyName}${keyCounter}`,
  //     imageUrl: { selectedImage },
  //   };
  //   isSubmitted
  //     ? setAllData((prevState) => [...prevState, currentInput])
  //     : setAllData([currentInput]);
  //   keyCounter++;
  // };
  // const userNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUserName(event.target.value);
  // };

  // const dateOfBirthHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setBirthDate(event.target.value);
  // };

  // const contactHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.target.id === 'c01'
  //     ? setContactSms(event.target.checked)
  //     : event.target.id === 'c02'
  //     ? setContactMail(event.target.checked)
  //     : null;
  // };
  // const selectLanguageHandler = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectLanguage(event.target.value);
  // };

  // const genderHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setGender(event.target.value);
  // };

  const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files instanceof File ? setSelectedImage(event.target.files[0]) : null;
    console.log(selectedImage);
  };
  // const { register } = useForm();

  const newSubmit = (data: unknown) => {
    const dataCollection = JSON.stringify(data);
    console.log(dataCollection);
    console.log(data);
  };

  return (
    <>
      <FormsTemplate
        // NameInput={userNameHandler}
        // BirthInput={dateOfBirthHandler}
        // LanguageInput={selectLanguageHandler}
        // ContactInput={contactHandler}
        // SubmitHandler={submitHandler}
        // GenderInput={genderHandler}
        FileUpload={fileUpload}
        // UserNameState={userName}
        // BirthDateState={birthDate}
        // ContactState={contact}
        // GenderState={gender}
        // selectLanguageState={selectLanguage}
        NewSubmit={newSubmit}
        // Register={register}
      />
      <div className={style.cardSection}>
        {isSubmitted &&
          allData.map((item) => {
            return (
              <div className={style.newCard} key={item.id}>
                <div>Name: {item.userName}</div>
                <div>Birthday: {item.birthDate}</div>
                <div>Preferred method of contact: {item.contact}</div>
                <div>Gender: {item.gender}</div>
                <div>I`m a {item.selectLanguage} native speaker</div>
                <div>
                  <img
                  // src={URL.createObjectURL(item.imageUrl)}
                  ></img>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FormsPage;
