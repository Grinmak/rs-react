import style from './FormsTemplate.module.css';
import React from 'react';
class FormsTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <form className={style.form}>
          <div>
            <label>
              Name:
              <input name="userName"></input>
            </label>
          </div>
          <div>
            <label>
              Date of birth:
              <input type="date" name="date"></input>
            </label>
          </div>
          <fieldset>
            <legend>Contact with me via</legend>
            <label>
              sms
              <input type="checkbox" name="checkbox"></input>
            </label>
            <label>
              e-mail
              <input type="checkbox" name="checkbox"></input>
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
          <label>
            Native language
            <input type="text" name="language"></input>
          </label>
          <label>
            Upload Image
            <input type="file" name="file"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default FormsTemplate;
