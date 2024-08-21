import React from "react";
import {
  CardIconContainer,
  CardInnerSection,
  CardSection,
  CustomImage,
  RatingContainer,
  ResturantCard,
  ResturantCardBg,
  Title,
} from "../../components/ResturantInfo/Restaurant.style";
import TextComponent from "../../components/TextComponent/TextComponent";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";

export default function ResturantInfo(props) {
  const { resturant = {} } = props;
  const {
    photo = "https://picsum.photos/700",
    name = "some Resturant",
    rating = 5,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isOpenNow = true,
  } = resturant;

  const RatingArray = Array.from(new Array(rating));

  return (
    <>
      <ResturantCard>
        <ResturantCardBg source={{ uri: photo }} />
        <CardSection>
          <TextComponent variant="label">{name}</TextComponent>
          <CardInnerSection>
            {RatingArray?.length > 0 && (
              <RatingContainer>
                {RatingArray?.map(() => (
                  <SvgXml xml={star} width={20} height={20} />
                ))}
              </RatingContainer>
            )}
            <CardIconContainer>
              {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
              {Boolean(icon) && !isOpenNow && (
                <CustomImage source={{ uri: icon }} />
              )}
            </CardIconContainer>
          </CardInnerSection>
        </CardSection>
      </ResturantCard>
    </>
  );
}
