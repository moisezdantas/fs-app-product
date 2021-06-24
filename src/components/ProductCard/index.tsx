import React, { ButtonHTMLAttributes } from "react";
import { View, Text } from "react-native";
import Product from "../../models/Product";

import styles from './styles'

const ProductCard: React.FC<Product> = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productTitle}>{props.name}</Text>
      <Text>{`Fabricante: ${props.factory.name}`}</Text>
      <View style={styles.priceSection}>
        <Text>Preço: </Text>
        <Text>R$ {props.price.toFixed(2).replace(".", ",")}</Text>
      </View>
      <Text style={styles.quantity}>{`Quantidade em Estoque: ${props.amount}`}</Text>
    </View>
  );
};

export default ProductCard;
