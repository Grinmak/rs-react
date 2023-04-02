import React, { ChangeEventHandler, FormEventHandler } from 'react';
import style from './FormsTemplate.module.css';
// import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type IProps = {
  NameInput: ChangeEventHandler<HTMLInputElement> | undefined;
  BirthInput: ChangeEventHandler<HTMLInputElement> | undefined;
  LanguageInput: ChangeEventHandler<HTMLSelectElement> | undefined;
  ContactInput: ChangeEventHandler<HTMLInputElement> | undefined;
  GenderInput: ChangeEventHandler<HTMLInputElement> | undefined;
  FileUpload: ChangeEventHandler<HTMLInputElement> | undefined;
  SubmitHandler: FormEventHandler<HTMLFormElement>;
  // SubmitHandler: SubmitHandler<FieldValues>;
  NewSubmit: SubmitHandler<FieldValues>;
  UserNameState: string;
  BirthDateState: string;
  ContactState: string[];
  GenderState: string;
  selectLanguageState: string;
  // Register: UseFormRegister<FieldValues>;
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <>
      <div>
        {/* <form className={style.wrapper} onSubmit={props.SubmitHandler}> */}
        <form className={style.wrapper} onSubmit={handleSubmit(props.NewSubmit)}>
          <div className={style.name}>
            Name:
            <label>
              <input
                {...register('name', {
                  required: true,
                  minLength: { value: 2, message: 'Minimal lenght for name field is 2 symbols' },
                })}
              ></input>
            </label>
          </div>
          <div className={style.date}>
            Date of birth:
            <label>
              <input
                type="date"
                {...register('birthDay', {
                  required: 'You missed your birthday',
                })}
              ></input>
            </label>
          </div>
          <fieldset>
            <legend>Contact with me via</legend>
            <label>
              sms
              <input
                type="checkbox"
                {...register('sms', {
                  // required:,
                })}
              ></input>
            </label>
            <label>
              e-mail
              <input
                type="checkbox"
                {...register('e-mail', {
                  // required:,
                })}
              ></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={props.GenderInput}
              ></input>
              <label htmlFor="male">Male</label>
            </div>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={props.GenderInput}
            ></input>
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
            <input type="file" name="file" onChange={props.FileUpload}></input>
          </label>
          <div className={style.button_wrapper}>
            <button className={style.submit_button} type="submit">
              Submit
            </button>
          </div>
          <div style={{ height: 20 }}>
            {errors?.name && (
              <p style={{ color: 'red' }}>
                {errors?.name.message?.toString() || 'Fill in name field'}
              </p>
            )}
            {errors?.birthDay && (
              <p style={{ color: 'red' }}>
                {errors?.birthDay.message?.toString() || 'Date is required'}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormsTemplate;
