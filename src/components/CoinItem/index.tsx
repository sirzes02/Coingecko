import React from "react";
import { View } from "react-native";
import marketType from "../../types/marketType";
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

interface Props {
  coin: marketType;
}

const CoinItem: React.FC<Props> = ({ coin }) => {
  return (
    <Container>
      <CoinName>
        <Icon source={{ uri: coin.image }} />
        <ContainerName>
          <Text>{coin.name}</Text>
          <TextSymbol>{coin.symbol}</TextSymbol>
        </ContainerName>
      </CoinName>
      <View>
        <TextPrice>${coin.current_price}</TextPrice>
        <TextPercentage price={coin.price_change_percentage_24h}>
          {coin.price_change_percentage_24h}
        </TextPercentage>
      </View>
    </Container>
  );
};

export default CoinItem;
