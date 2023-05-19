import React, { ChangeEvent, useState } from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';
import style from './FormsPage.module.css';
import { FieldValues, SubmitHandler } from 'react-hook-form';

//redux related import
import { useAppDispatch } from '../hooks';
import { setIsSubmitted } from '../store/submitStateSlice';
import { useAppSelector } from '../hooks';

const keyName = 'card';
let keyCounter = 0;
const FormsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSubmitted = useAppSelector((state) => state.submitState.isSubmitted);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | File | null>(null);

  const [allData, setAllData] = useState([
    {
      userName: '',
      birthDate: '',
      gender: '',
      contact: [''],
      selectLanguage: '',
      id: '',
      imgSrc: '',
      // imageUrl: URL.createObjectURL(selectedImage),
    },
  ]);

  // const fileUpload = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.target.files instanceof File ? setSelectedImage(event.target.files[0]) : null;
  //   console.log('selectedImage:', selectedImage);
  // };

  const newSubmit: SubmitHandler<FieldValues> = ({
    name,
    birthDay,
    gender,
    contact,
    language,
    file,
    // id,
  }) => {
    dispatch(setIsSubmitted(true));
    // setIsSubmitted(true);
    const currentInput = {
      userName: name,
      birthDate: birthDay,
      gender: gender,
      contact: [contact],
      selectLanguage: language,
      id: `${keyName}${keyCounter}`,
      imgSrc: URL.createObjectURL(file[0]),
    };
    isSubmitted
      ? setAllData((prevState) => [...prevState, currentInput])
      : setAllData([currentInput]);
    keyCounter++;
    alert('New card will be created');
    // console.log(currentInput);
  };

  return (
    <>
      <FormsTemplate NewSubmit={newSubmit} />
      <div className={style.cardSection}>
        {isSubmitted &&
          allData.map((item) => {
            return (
              <div className={style.newCard} key={item.id}>
                <div>Name: {item.userName}</div>
                <div>Birthday: {item.birthDate}</div>
                <div>Preferred method of contact: {item.contact}</div>
                <div>Gender: {item.gender}</div>
                <div>I speak {item.selectLanguage} </div>
                <div className={style.img_wrapper}>
                  <img className={style.card_image} src={item.imgSrc}></img>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FormsPage;
