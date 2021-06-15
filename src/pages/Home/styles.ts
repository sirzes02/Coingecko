import { FlatList } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import marketType from "../../types/marketType";

export const Container = styled.View`
  background-color: ${colors.background};
  align-items: center;
  flex: 1px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${colors.textPrimary};
  margin-top: 10px;
  font-size: 20px;
`;

export const SearchInput = styled.TextInput`
  color: ${colors.textPrimary};
  border-bottom-color: ${colors.accent};
  border-bottom-width: 1px;
  width: 40%;
  text-align: center;
`;

export const StyledFlatList = styled(
  FlatList as new () => FlatList<marketType>
)`
  width: 90%;
`;
