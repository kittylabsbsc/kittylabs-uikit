import React from "react";
import styled from "styled-components";
import { KittyRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  kittyPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const KittyPrice: React.FC<Props> = ({ kittyPriceUsd }) => {
  return kittyPriceUsd ? (
    <PriceLink href="https://info.cheeseswap.app/#/token/0x5b4963b964bac5c2db83e53fffe46e0cb83a1346" target="_blank">
      <KittyRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${kittyPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(KittyPrice);
