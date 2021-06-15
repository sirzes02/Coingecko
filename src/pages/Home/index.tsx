import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Header,
  Title,
  SearchInput,
  StyledFlatList,
} from "./styles";
import marketType from "../../types/marketType";
import CoinItem from "../../components/CoinItem/";
import colors from "../../styles/colors";

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

  const sentCoin: marketType[] = coins.filter(
    (coin: marketType) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <StatusBar backgroundColor={colors.background} />
      <Header>
        <Title>CrytoMarket</Title>
        <SearchInput
          placeholder="Search a Coin"
          placeholderTextColor={colors.placeholders}
          onChangeText={setSearch}
        />
      </Header>
      <StyledFlatList
        data={sentCoin}
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
