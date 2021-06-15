import { FlatList } from "react-native";
import styled from "styled-components/native";
import marketType from "../../types/marketType";

export const Container = styled.View`
  background-color: #141414;
  align-items: center;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 10;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 10;
  font-size: 20;
`;

export const SearchInput = styled.TextInput`
  color: #fff;
  border-bottom-color: #4657ce;
  border-bottom-width: 1;
  width: 40%;
  text-align: center;
`;

export const StyledFlatList = styled(
  FlatList as new () => FlatList<marketType>
)`
  width: 90%;
`;
