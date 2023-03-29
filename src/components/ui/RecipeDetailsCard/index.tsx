//#Global Imports
import React from "react";

//#Local Imports
import { IRecipeCardDetailsProps } from "./RecipeDetailsCard";
import {
  CardDetailsContainer,
  DetailsWrapper,
  RecipeDescription,
  OtherDetailsWrapper,
  Title,
} from "./RecipeDetailsCardStyle";

const RecipeDetailsCard: React.FC<IRecipeCardDetailsProps.IProps> = ({
  recipeData,
 
}) => {
  return (
    <CardDetailsContainer>
     
      <DetailsWrapper>
        <Title>{recipeData?.name}</Title>

        <Title>Ingredients:</Title>
        {recipeData?.ingredients.map((ingredients:string) => (
          <OtherDetailsWrapper>{ingredients}</OtherDetailsWrapper>
        ))}

        <Title>Instructions:</Title>
        {recipeData?.instructions?.map((instructions:string) => (
          <RecipeDescription>{instructions}</RecipeDescription>
        ))}
      </DetailsWrapper>
    </CardDetailsContainer>
  );
};

export default RecipeDetailsCard;
