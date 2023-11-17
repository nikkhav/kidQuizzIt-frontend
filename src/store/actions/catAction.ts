import { setCat } from "../slices/catSlice";
import { AppDispatch } from "../index";

export const setCatVariable = (value: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(setCat(value));
    return Promise.resolve(); // или другое значение, если необходимо
  };
};
