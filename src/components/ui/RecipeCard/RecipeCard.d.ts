import { IHomeProps } from "../../../pages/Home/home";

declare namespace IRecipeCardProps {


  export interface IProps {
    width: string;
    bgColor: string;
    fontColor: string;
    height: string;
    imgHeight: string;
    imgWidth: string;
    data: IHomeProps.AddRecipeData;
    onClickHandler: (string) => void;
    onEditHandler: (id) => void;
    onDeleteHandler: (id) => void;
  }
}

export { IRecipeCardProps };
