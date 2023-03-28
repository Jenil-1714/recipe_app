import { SetStateAction } from "react";
import {IRecipeCardProps} from "../../components/ui/RecipeCard/RecipeCard"

export declare namespace IHomeProps {
  type AddRecipeData = {
    id: number;
    name: string;
    ingredients: Array<string>;
    instructions: Array<string>;
    imgSrc?:string;
  }

  export interface IEditProps {
    title?: string;
    isOpen: boolean;
    onCloseHandler: () => void;
    onSubmitHandler: (data:AddRecipeData) => void;
    selectedRecipe:AddRecipeData;
    setSelectedRecipe: Dispatch<SetStateAction<AddRecipeData>>
  }

  export interface IAddProps {
    title?: string;
    isOpen: boolean;
    onCloseHandler: () => void;
    onSubmitHandler: (data:AddRecipeData) => void;
  }
}
