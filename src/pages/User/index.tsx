import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Alert, Platform } from "react-native";

import styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { addUser } from "../../service/service";
import User from "../../models/User";
import { isEmailValid, validateField } from "../../util";
import HeaderTitle from "../../components/HeaderTitle";

export default function UserRegistration({ navigation }: any) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorAge, setAgeError] = useState("");
  const [errorAddress, setAddressError] = useState("");
  const [errorEmail, setEmailError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");

  function goHome(): void {
    navigation.reset({
      index: 0,
      routes: [{ name: "Produtos" }],
    });
  }

  function validateFields(): void {
    let user: User = {
      name: "",
      age: 0,
      address: "",
      email: "",
      userPassword: "",
    };

    let numberAge;

    if (!validateField(name)) {
      setErrorName("Informe seu nome");
      return;
    } else {
      setErrorName("");
    }

    try {
      if (!validateField(age)) {
        setAgeError("Informe seu idade");
        return;
      }
      numberAge = parseInt(age);
      if (numberAge < 18) {
        setAgeError("Idade menor 18 não é permitido");
        return;
      }
    } catch (error) {
      setAgeError("Informe um valor numérico");
    }
    setAgeError("");

    if (!validateField(address)) {
      setAddressError("Informe seu Endereço");
      return;
    } else {
      setAddressError("");
    }
    if (!validateField(email)) {
      setEmailError("Email invalido");
      return;
    } else {
      setEmailError("");
    }
    if (!isEmailValid(email)) {
      setEmailError("Email invalido");
      return;
    } else {
      setEmailError("");
    }
    if (!validateField(password)) {
      setErrorPassword("Informe sua senha");
      return;
    }
    if (!validateField(confirmPassword)) {
      setErrorPassword("Informe confirmação da sua senha");
    }
    if (password !== confirmPassword) {
      setErrorPassword("Senha e confirmar senha não confere!");
    }

    user.address = address;
    user.age = numberAge;
    user.userPassword = password;
    user.name = name;
    user.email = email;

    addUser(user)
      .then((result) => {
        if (!result) {
          setError(
            "Houve um erro ao efetuar o cadastro.\nContate o administrador."
          );
          return;
        }

        goHome();
      })
      .catch((error) => {
        console.log(error);
        setError(
          `Houve um erro ao efetuar o cadastro.\nContate o administrador.`
        );
      });
  }

  return (
    <KeyboardAvoidingView  
    keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}>
        
      <View style={styles.content}>
        <HeaderTitle title="Registrar"/>
        <View style={styles.inputs}>
        <Input
          placeholder="Nome Completo"
          value={name}
          onChangeText={setName}
        />

        {errorName?.length > 0 && <Text style={styles.error}>{errorName}</Text>}

        <Input
          placeholder="Idade"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        {errorAge?.length > 0 && <Text style={styles.error}>{errorAge}</Text>}

        <Input
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />

        {errorAddress?.length > 0 && (
          <Text style={styles.error}>{errorAddress}</Text>
        )}

        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errorEmail?.length > 0 && (
          <Text style={styles.error}>{errorEmail}</Text>
        )}

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Confirma senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {errorPassword?.length > 0 && (
          <Text style={styles.error}>{errorPassword}</Text>
        )}
        {error?.length > 0 && <Text style={styles.error}>{error}</Text>}

        <Button onPress={validateFields} title="Cadastrar" />
        <Button onPress={goHome} title="Cancelar" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
