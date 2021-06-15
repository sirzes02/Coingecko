import React from "react";
import { View } from "react-native";
import {
  Container,
  CoinName,
  Icon,
  Text,
  ContainerName,
  TextSymbol,
  TextPrice,
  TextPercentage,
} from "./styles";
import marketType from "../../types/marketType";

interface Props {
  coin: marketType;
}

const CoinItem: React.FC<Props> = ({ coin }) => {
  const { image, name, symbol, current_price, price_change_percentage_24h } =
    coin;

  return (
    <Container>
      <CoinName>
        <Icon source={{ uri: image }} />
        <ContainerName>
          <Text>{name}</Text>
          <TextSymbol>{symbol}</TextSymbol>
        </ContainerName>
      </CoinName>
      <View>
        <TextPrice>${current_price}</TextPrice>
        <TextPercentage price={price_change_percentage_24h}>
          {price_change_percentage_24h}
        </TextPercentage>
      </View>
    </Container>
  );
};

export default CoinItem;
