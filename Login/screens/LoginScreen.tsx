import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from '../styles/login';

type RootStackParamList = {
  Home: undefined;
  Sobre: undefined;
  ForgotPassword: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Não tem login? Faça o cadastro aqui</Text>
    </View>
  );
};
