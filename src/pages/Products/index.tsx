import React, { useState, useEffect } from "react";
import { getProductsList } from "../../service/service";
import { View, Text } from "react-native";
import Product from "../../models/Product";
import ProductCard from "../../components/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import HeaderTitle from "../../components/HeaderTitle";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Products() {
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const productList = await getProductsList();
      setProducts(productList);
      setLoading(false);
    }
    fetchData();
  }, []);

  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }
  
  if(!products) return <View/>;

  return (
    <View style={styles.container}>
      <Loading loading={loading} />
      
      <FlatList
        data={products}
        ListHeaderComponent={<HeaderTitle title='Lista de produtos'/>}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item, index }) => <ProductCard {...item} />}
      />
      <View style={styles.buttonLogout}>
        <Button onPress={logout} title="Logout" />
      </View>
    </View>
  );
}
