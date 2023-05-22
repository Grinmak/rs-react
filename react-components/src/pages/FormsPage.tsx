import React from 'react';
import FormsTemplate from '../components/FormsTemplate/FormsTemplate';
import style from './FormsPage.module.css';

import { useAppSelector } from '../hooks';

const FormsPage: React.FC = () => {
  const isSubmitted = true;
  const allData = useAppSelector((state) => state.formState.formList);

  return (
    <>
      <FormsTemplate />
      <div className={style.cardSection}>
        {isSubmitted &&
          allData.map((item) => {
            return (
              <div className={style.newCard} key={item.id}>
                <div>Name: {item.name}</div>
                <div>Birthday: {item.birthDay}</div>
                <div>Preferred method of contact: {item.contact}</div>
                <div>Gender: {item.gender}</div>
                <div>I speak {item.language} </div>
                <div className={style.img_wrapper}>
                  <img className={style.card_image} src={item.file as string}></img>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FormsPage;
