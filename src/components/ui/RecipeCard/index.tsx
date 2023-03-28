//#Global imports
import React from "react";
import { Edit, Delete } from "@mui/icons-material";
import { CardMedia } from "@mui/material";

//#Local imports
import { IRecipeCardProps } from "./RecipeCard";
import { Actions, BaseCard, ImgCard, Title } from "./RecipeCardStyles";

const RecipeCard: React.FunctionComponent<IRecipeCardProps.IProps> = ({
  data,
  width,
  height,
  bgColor,
  imgWidth,
  imgHeight,
  fontColor,
  onClickHandler,
  onEditHandler,
  onDeleteHandler,
}) => {
  return (
    <BaseCard width={width} height={height} bgColor={bgColor}>
      <ImgCard>
        <CardMedia
          component="img"
          alt={`${data?.name}_image`}
          image={data?.imgSrc ?? ""}
          width={imgWidth}
          height={imgHeight}
          onClick={() => onClickHandler(data?.id)}
        />
      </ImgCard>
      <Title fontColor={fontColor}>{data?.name}</Title>
      <Actions>
        <div onClick={() => onEditHandler(data)}>
          <Edit />
        </div>
        <div onClick={() => onDeleteHandler(data)}>
          <Delete />
        </div>
      </Actions>
    </BaseCard>
  );
};

export default RecipeCard;
