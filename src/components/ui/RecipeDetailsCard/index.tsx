//#Global Imports
import React from "react";

//#Local Imports
import { IRecipeCardDetailsProps } from "./RecipeDetailsCard";
import {
  CardDetailsContainer,
  DetailsWrapper,
  // ImageContainer,
  RecipeDescription,
  OtherDetailsWrapper,
  Title,
} from "./RecipeDetailsCardStyle";

const RecipeDetailsCard: React.FC<IRecipeCardDetailsProps.IProps> = ({
  movieData,
  // imageWidth,
  // imageHeight,
}) => {
  return (
    <CardDetailsContainer>
      {/* <ImageContainer width={imageWidth} height={imageHeight}>
        <img src={movieData?.imgSrc} />
      </ImageContainer> */}
      <DetailsWrapper>
        <Title>{movieData?.name}</Title>

        <Title>Ingredients:</Title>
        {movieData?.ingredients.map((ingredients:string) => (
          <OtherDetailsWrapper>{ingredients}</OtherDetailsWrapper>
        ))}

        <Title>Instructions:</Title>
        {movieData?.instructions?.map((instructions:string) => (
          <RecipeDescription>{instructions}</RecipeDescription>
        ))}
      </DetailsWrapper>
    </CardDetailsContainer>
  );
};

export default RecipeDetailsCard;
