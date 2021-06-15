import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CoinName = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Text = styled.Text`
  color: ${colors.textPrimary};
`;

export const TextSymbol = styled.Text`
  color: ${colors.textSecondary};
  text-transform: uppercase;
`;

export const TextPrice = styled.Text`
  color: ${colors.textPrimary};
  text-align: right;
`;

export const ContainerName = styled.View`
  margin-left: 10px;
`;

interface PropsPercentage {
  price: number;
}

export const TextPercentage = styled.Text<PropsPercentage>`
  text-align: right;
  color: ${(props) => (props.price > 0 ? colors.up : colors.down)};
`;
