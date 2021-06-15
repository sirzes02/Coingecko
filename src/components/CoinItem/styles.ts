import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #121212;
  padding-top: 10;
  flex-direction: row;
  justify-content: space-between;
`;

export const CoinName = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 30;
  height: 30;
`;

export const Text = styled.Text`
  color: #ffffff;
`;

export const TextSymbol = styled.Text`
  color: #434343;
  text-transform: uppercase;
`;

export const TextPrice = styled.Text`
  color: #fff;
  text-align: right;
`;

export const ContainerName = styled.View`
  margin-left: 10;
`;

interface PropsPercentage {
  price: number;
}

export const TextPercentage = styled.Text<PropsPercentage>`
  text-align: right;
  color: ${(props) => (props.price > 0 ? "#00b5b9" : "#fc4433")};
`;
