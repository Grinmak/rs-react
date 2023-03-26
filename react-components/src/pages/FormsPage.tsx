import React from 'react';

type IProps = object;
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
type ILanguageArray = Array<ILanguage>;

const languageValues: ILanguageArray = [
  { id: 'en', value: 'english', title: 'English' },
  { id: 'kl', value: 'klingon', title: 'Klingon' },
  { id: 'dw', value: 'dwarvish', title: 'Dwarvish' },
  { id: 'gl', value: 'galach', title: 'Galach' },
];

class FormsTemplate extends React.Component<IProps, IFormsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: '',
      birthDate: '',
      contact: '',
      selectLanguage: '',
      rendered: false,
    };
  }
  userNameHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userName: value,
    });
  };
  dateOfBirthHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      birthDate: value,
    });
  };

  contactHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    this.setState({
      contact: value,
    });
  };
  selectLanguageHandler = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectLanguage: value,
    });
  };
  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(value);
    this.setState({
      rendered: true,
    });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>
                Name:
                <input
                  name="userName"
                  value={this.state.userName}
                  onChange={this.userNameHandler}
                ></input>
              </label>
            </div>
            {/* <FormsName /> */}
            <div>
              <label>
                Date of birth:
                <input
                  type="date"
                  name="date"
                  value={this.state.birthDate}
                  onChange={this.dateOfBirthHandler}
                ></input>
              </label>
            </div>
            <fieldset>
              <legend>Contact with me via</legend>
              <label>
                sms
                <input type="checkbox" name="checkbox" onChange={this.contactHandler}></input>
              </label>
              <label>
                e-mail
                <input type="checkbox" name="checkbox" onChange={this.contactHandler}></input>
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
                onChange={this.selectLanguageHandler}
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
            {/* <textarea value="test"></textarea> */}
          </form>
        </div>
        <div>{this.state.rendered && <h3>test</h3>}</div>
      </>
    );
  }
}

export default FormsTemplate;
