import React from 'react';
// import style from './UserCardGenerator.module.css';
// import IFormsState from '../../types/IFormsState';

type IProps = {
  userName: string;
  birthDate?: string;
  contact?: string;
  selectLanguage?: string;
};

// type IFormsState = {
//   userName: string;
//   birthDate: string;
//   contact?: string;
//   selectLanguage?: string;
// };

function UserCardGenerator(props: IProps) {
  return <div>{props.userName}</div>;
}

export default UserCardGenerator;
