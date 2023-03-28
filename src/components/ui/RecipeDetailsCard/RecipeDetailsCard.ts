export declare namespace IRecipeCardDetailsProps {
  export type movieData = {
    id: number;
    name: string;
    ingredients: Array<string>;
    instructions: Array<string>;
    imgSrc: string;
  };

  export interface IProps {
    movieData: movieData;
    imageWidth: string;
    imageHeight: string;
  }
}

