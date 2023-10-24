import { useState } from "react";
import { ImageLoader } from "../Loaders/Loaders";
import {
  DescriptionItem,
  DescriptionList,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrap,
  Image,
  ImageLoaderWrapper,
  ItemWrap,
} from "./DealsItem-styled";

export const DealsItem = ({ el }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { days_left, price, sold, ticket, title, url, output } = el;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ItemWrap>
      {isLoading ? (
        <ImageLoaderWrapper>
          <ImageLoader />
        </ImageLoaderWrapper>
      ) : null}
      <Image src={url} alt={title} onLoad={handleImageLoad} />
      <DescriptionWrap>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionList>
          <DescriptionItem>
            <DescriptionText>{price.toLocaleString()} Dhs</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionText>Yield {output}%</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionText>Sold {sold}%</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionText>
              Tiket - {ticket.toLocaleString()} Dhs
            </DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionText>Days left {days_left}</DescriptionText>
          </DescriptionItem>
        </DescriptionList>
      </DescriptionWrap>
    </ItemWrap>
  );
};
