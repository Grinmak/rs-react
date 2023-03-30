import React, { ChangeEventHandler, FormEventHandler } from 'react';
import style from './FormsTemplate.module.css';

type IProps = {
  NameInput: ChangeEventHandler<HTMLInputElement> | undefined;
  BirthInput: ChangeEventHandler<HTMLInputElement> | undefined;
  LanguageInput: ChangeEventHandler<HTMLSelectElement> | undefined;
  ContactInput: ChangeEventHandler<HTMLInputElement> | undefined;
  SubmitHandler: FormEventHandler<HTMLFormElement>;
  UserNameState: string;
  BirthDateState: string;
  ContactState: string;
  selectLanguageState: string;
};

type ILanguage = {
  id: string;
  value: string;
  title: string;
};

type ILanguageArray = Array<ILanguage>;

const languageValues: ILanguageArray = [
  { id: 'en', value: 'english', title: 'English' },
  { id: 'kl', value: 'klingon', title: 'Klingon' },
  { id: 'dw', value: 'dwarvish', title: 'Dwarvish' },
  { id: 'gl', value: 'galach', title: 'Galach' },
];

const FormsTemplate = (props: IProps) => {
  return (
    <>
      <div>
        <form className={style.wrapper} onSubmit={props.SubmitHandler}>
          <div className={style.name}>
            Name:
            <label>
              <input
                className={style.input_name}
                name="userName"
                value={props.UserNameState}
                onChange={props.NameInput}
              ></input>
            </label>
          </div>
          <div className={style.date}>
            Date of birth:
            <label>
              <input
                className={style.input_date}
                type="date"
                name="date"
                value={props.BirthDateState}
                onChange={props.BirthInput}
              ></input>
            </label>
          </div>
          <fieldset>
            <legend>Contact with me via</legend>
            <label>
              sms
              <input type="checkbox" name="checkbox" onChange={props.ContactInput}></input>
            </label>
            <label>
              e-mail
              <input type="checkbox" name="checkbox" onChange={props.ContactInput}></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Gender:</legend>
            <div>
              <input type="radio" name="gender" value="male" id="female"></input>
              <label htmlFor="male">Male</label>
            </div>
            <input type="radio" name="gender" value="female" id="female"></input>
            <label htmlFor="female">Female</label>
          </fieldset>
          <div>
            Native Language
            <select value={props.selectLanguageState} onChange={props.LanguageInput} name="test">
              {languageValues.map(({ id, value, title }) => (
                <option key={id} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <label>
            Upload Image
            <input type="file" name="file"></input>
          </label>
          <div className={style.button_wrapper}>
            <button className={style.submit_button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormsTemplate;
