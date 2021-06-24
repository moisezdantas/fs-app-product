import React, { Fragment, useMemo, useState } from "react";
import { View, Image, Text } from "react-native";
import Button from "../../components/Button";
import { validateField, isEmailValid } from "../../util";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../service/service";

import styles from "./styles";
import Input from "../../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  function goUser() {
    navigation.navigate("Cadastrar Usuário");
  }

  async function login(): Promise<any> {

    if (!isEmailValid(email)) {
      setError("Email ou senha inválido!");
      return;
    }

    if (!validateField(password)) {
      setError("Email ou senha inválido!");
      return;
    }

    auth(email, password)
      .then((result) => {
        if (!result) {
          setError("E-mail ou Senha Inválidos!\nTente novamente.");
          return;
        }

        navigation.reset({
          index: 0,
          routes: [{ name: "Produtos" }],
        });
      })
      .catch((error) => {
      
        setError(
          `Houve um erro ao tentar logar.\nContate o administrador. ${error}`
        );
      });
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <Input
        placeholder="Digite email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Digite senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error?.length > 0 && <Text style={styles.error}>{error}</Text>}
      <Button title="Logar" onPress={login} />
      <Button title="Registrar" onPress={goUser} />
    </View>
  );
}
