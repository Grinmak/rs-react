import React, { ChangeEvent, FormEvent } from 'react';
import style from './FormsTemplate.module.css';

type IProps = {
  NameInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  BirthInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  LanguageInput: ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => void;
  ContactInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  SubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  UserNameState: string;
  BirthDateState: string;
  ContactState: string;
  selectLanguageState: string;

  // StateData: string;
};
type IFormsState = {
  userName: string;
  birthDate: string;
  contact: string;
  selectLanguage: string;
  rendered: boolean;
};
type ILanguage = {
  id: string;
  value: string;
  title: string;
};

// type IHandlers = {
//   FormHandler: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
// };
type ILanguageArray = Array<ILanguage>;

const languageValues: ILanguageArray = [
  { id: 'en', value: 'english', title: 'English' },
  { id: 'kl', value: 'klingon', title: 'Klingon' },
  { id: 'dw', value: 'dwarvish', title: 'Dwarvish' },
  { id: 'gl', value: 'galach', title: 'Galach' },
];

class FormsTemplate extends React.Component<IProps, IFormsState> {
  render() {
    return (
      <>
        <div>
          <form className={style.wrapper} onSubmit={this.props.SubmitHandler}>
            <div className={style.name}>
              Name:
              <label>
                <input
                  className={style.input_name}
                  name="userName"
                  value={this.props.UserNameState}
                  onChange={this.props.NameInput}
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
                  value={this.props.BirthDateState}
                  onChange={this.props.BirthInput}
                ></input>
              </label>
            </div>
            <fieldset>
              <legend>Contact with me via</legend>
              <label>
                sms
                <input type="checkbox" name="checkbox" onChange={this.props.ContactInput}></input>
              </label>
              <label>
                e-mail
                <input type="checkbox" name="checkbox" onChange={this.props.ContactInput}></input>
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
              <select
                value={this.props.selectLanguageState}
                onChange={this.props.LanguageInput}
                name="test"
              >
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
  }
}

export default FormsTemplate;
