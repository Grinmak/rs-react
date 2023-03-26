import style from './FormsTemplate.module.css';
import React from 'react';
// // import FormsName from '../FormsName/FormsName';
// // import UserCardGenerator from '../UserCardGenerator/UserCardGenerator';

type IProps = object;
type IFormsState = {
  userName: string;
  birthDate: string;
  contact: string;
  selectLanguage: string;
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
// const FormsTemplate = (
//   userNameHandler,
//   dateOfBirthHandler,
//   selectLanguageHandler,
//   submitHandler
// ) => {
//   return (
//     <div className={style.wrapper}>
//         <div className={style.name}>

//         </div>
//         {/* <FormsName /> */}
//         <div>
//           <label>
//             Date of birth:
//             <input
//               type="date"
//               name="date"
//               value={birthDate}
//               onChange={dateOfBirthHandler}
//             ></input>
//           </label>
//         </div>
//         <fieldset>
//           <legend>Contact with me via</legend>
//           <label>
//             sms
//             <input type="checkbox" name="checkbox" onChange={this.contactHandler}></input>
//           </label>
//           <label>
//             e-mail
//             <input type="checkbox" name="checkbox" onChange={this.contactHandler}></input>
//           </label>
//         </fieldset>
//         <fieldset>
//           <legend>Gender:</legend>
//           <div>
//             <input type="radio" name="gender" value="male" id="female"></input>
//             <label htmlFor="male">Male</label>
//           </div>
//           <input type="radio" name="gender" value="female" id="female"></input>
//           <label htmlFor="female">Female</label>
//         </fieldset>
//         <div>
//           {' '}
//           Native Language
//           <select
//             value={this.state.selectLanguage}
//             onChange={this.selectLanguageHandler}
//             name="test"
//           >
//             {languageValues.map(({ id, value, title }) => (
//               <option key={id} value={value}>
//                 {title}
//               </option>
//             ))}
//           </select>
//         </div>

//         <label>
//           Upload Image
//           <input type="file" name="file"></input>
//         </label>
//         <button type="submit">Submit</button>
//         {/* <textarea value="test"></textarea> */}
//       </form>
//     </div>
//   );
// };
class FormsTemplate extends React.Component<IProps, IFormsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: '',
      birthDate: '',
      contact: '',
      selectLanguage: '',
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
    // console.log(this.state.birthDate);
  };

  contactHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    this.setState({
      contact: value,
    });
  };
  selectLanguageHandler = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(value);
    this.setState({
      selectLanguage: value,
    });
  };
  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(value);
  };

  render() {
    return (
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={this.submitHandler}>
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
            {' '}
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
    );
  }
}

export default FormsTemplate;
