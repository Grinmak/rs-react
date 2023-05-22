import React from 'react';
import style from './FormsTemplate.module.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { newSubmit } from '../../store/formSlice';
import IFormFields from '../../types/IFormFields';
import ILanguage from '../../types/Ilanguage';

type ILanguageArray = Array<ILanguage>;

const languageValues: ILanguageArray = [
  { id: 'null', value: '', title: 'select option' },
  { id: 'en', value: 'english', title: 'English' },
  { id: 'kl', value: 'klingon', title: 'Klingon' },
  { id: 'dw', value: 'dwarvish', title: 'Dwarvish' },
  { id: 'gl', value: 'galach', title: 'Galach' },
];

const keyName = 'card';
let keyCounter = 0;

const FormsTemplate: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormFields>({
    mode: 'onBlur',
  });

  const dispatch = useAppDispatch();

  const validateDate = (value: string) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 14;
  };

  const handler = (data: IFormFields) => {
    data.id = `${keyName}${keyCounter}`;
    data.file = URL.createObjectURL(data.file[0] as File);
    dispatch(newSubmit(data));
    ++keyCounter;
    reset();
  };

  return (
    <>
      <div>
        <form className={style.wrapper} onSubmit={handleSubmit(handler)}>
          <div className={style.name}>
            Name:
            <label>
              <input
                {...register('name', {
                  required: true,
                  minLength: { value: 2, message: 'Minimal lenght for name field is 2 symbols' },
                  pattern: { value: /[a-zA-Z]/, message: 'Use letters please' },
                })}></input>
            </label>
          </div>
          <div className={style.date}>
            Date of birth:
            <label>
              <input
                type="date"
                min=""
                {...register('birthDay', {
                  required: 'You missed your birthday',
                  validate: validateDate,
                })}></input>
            </label>
          </div>
          <fieldset>
            <legend>Contact with me via</legend>
            <label>
              sms
              <input
                type="checkbox"
                value="sms"
                {...register('contact', {
                  required: {
                    value: true,
                    message: 'Contact is required',
                  },
                })}></input>
            </label>
            <label>
              e-mail
              <input
                type="checkbox"
                value="e-mail"
                {...register('contact', {
                  required: {
                    value: true,
                    message: 'Contact is required',
                  },
                })}></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                value="male"
                {...register('gender', {
                  required: {
                    value: true,
                    message: 'Gender is required',
                  },
                })}></input>
              <label htmlFor="male">Male</label>
            </div>
            <input
              type="radio"
              value="female"
              {...register('gender', {
                required: {
                  value: true,
                  message: 'Gender is required',
                },
              })}></input>
            <label htmlFor="female">Female</label>
          </fieldset>
          <div>
            Native Language
            <select
              defaultValue=""
              {...register('language', {
                required: 'You did`t select language',
              })}>
              {languageValues.map(({ id, value, title }) => (
                <option key={id} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <label>
            Upload Image
            <input
              type="file"
              {...register('file', {
                required: true,
              })}></input>
          </label>
          <div className={style.button_wrapper}>
            <button className={style.submit_button} type="submit">
              Submit
            </button>
          </div>
          <div style={{ height: 20 }}>
            {/* {errors?.name && (
              <p style={{ color: 'red' }}>
                {errors?.name.message?.toString() || 'Fill in name field'}
              </p>
            )}
            {errors?.birthDay && (
              <p style={{ color: 'red' }}>
                {errors?.birthDay.message?.toString() || 'Date is required'}
              </p>
            )}
            {errors?.language && (
              <p style={{ color: 'red' }}>
                {errors?.language.message?.toString() || 'Select language'}
              </p>
            )}
            {errors?.checkbox && (
              <p style={{ color: 'red' }}>
                {errors?.checkbox && 'Choose sms or e-mail as contact option'}
              </p>
            )}
            {errors?.gender && (
              <p style={{ color: 'red' }}>
                {errors?.gender.message?.toString() || 'Select gender'}
              </p>
            )}
            {errors?.contact && (
              <p style={{ color: 'red' }}>
                {errors?.contact.message?.toString() || 'You missed contacty field'}
              </p>
            )}
            {errors?.birthDay?.type === 'validate' && (
              <p style={{ color: 'red' }}> You should be at least 14 years old </p>
            )} */}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormsTemplate;
