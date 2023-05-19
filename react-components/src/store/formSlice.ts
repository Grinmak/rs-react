import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFormItem = {
  userName: string;
  birthDate: string;
  gender: string;
  contact: string[];
  selectLanguage: string;
  id: string;
  imgSrc: string;
};

type IFormList = {
  formList: Array<IFormItem>;
};

const initialState: IFormList = {
  formList: [
    {
      userName: '',
      birthDate: '',
      gender: '',
      contact: [''],
      selectLanguage: '',
      id: '',
      imgSrc: '',
    },
  ],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    // fileUpload(state, action){
    //   event.target.files instanceof File ? setSelectedImage(event.target.files[0]) : null;
    //   console.log(selectedImage);
    // };
    // },
    // newSubmit(state,ation){},
  },
});
