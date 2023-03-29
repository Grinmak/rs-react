import React, { ChangeEvent } from 'react';

type IProps = {
  NameInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  BirthInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  LanguageInput: ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => void;
  ContactInput: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  StateData: string;
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
  constructor(props: IProps) {
    super(props);
    this.state = {
      userName: `${this.props.StateData.}`,
      birthDate: '',
      contact: '',
      selectLanguage: '',
      rendered: false,
    };
    console.log('props :', this.props);
    console.log('state :', this.state);
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.props.submitHandler}>
            <div>
              <label>
                Name:
                <input
                  name="userName"
                  value={this.state.userName}
                  onChange={this.props.NameInput}
                ></input>
              </label>
            </div>
            <div>
              <label>
                Date of birth:
                <input
                  type="date"
                  name="date"
                  value={this.state.birthDate}
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
                value={this.state.selectLanguage}
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default FormsTemplate;
