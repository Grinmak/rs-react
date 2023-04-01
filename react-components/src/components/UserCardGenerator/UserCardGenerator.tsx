import React from 'react';

type IProps = {
  userName: string;
  birthDate?: string;
  contact?: string;
  selectLanguage?: string;
};

function UserCardGenerator(props: IProps) {
  return <div>{props.userName}</div>;
}

export default UserCardGenerator;
