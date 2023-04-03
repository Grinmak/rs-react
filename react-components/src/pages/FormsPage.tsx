import React, { ChangeEvent, useState } from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';
import style from './FormsPage.module.css';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const keyName = 'card';
let keyCounter = 0;
const FormsPage = () => {
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

  const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files instanceof File ? setSelectedImage(event.target.files[0]) : null;
    console.log(selectedImage);
  };

  const newSubmit: SubmitHandler<FieldValues> = ({
    name,
    birthDay,
    gender,
    contact,
    language,
    // id,
  }) => {
    setIsSubmitted(true);
    const currentInput = {
      userName: name,
      birthDate: birthDay,
      gender: gender,
      contact: [contact],
      selectLanguage: language,
      id: `${keyName}${keyCounter}`,
      // imageUrl: { selectedImage },
    };
    isSubmitted
      ? setAllData((prevState) => [...prevState, currentInput])
      : setAllData([currentInput]);
    keyCounter++;

    console.log(name);
  };

  return (
    <>
      <FormsTemplate FileUpload={fileUpload} NewSubmit={newSubmit} />
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
