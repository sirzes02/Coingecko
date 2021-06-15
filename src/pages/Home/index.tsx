import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import marketType from "../../types/marketType";
import CoinItem from "../../components/CoinItem/";
import {
  Container,
  Header,
  Title,
  SearchInput,
  StyledFlatList,
} from "./styles";

const Home: React.FC = () => {
  const [coins, setCoins] = useState<marketType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadData = async () => {
    const res: Response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data: marketType[] = await res.json();

    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#141414" />
      <Header>
        <Title>CrytoMarket</Title>
        <SearchInput
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => setSearch(text)}
        />
      </Header>
      <StyledFlatList
        data={coins.filter(
          (coin: marketType) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => <CoinItem coin={item} />}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </Container>
  );
};

export default Home;
