import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    Home: undefined;
    Sobre: undefined;
};

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
}

export default function Home({ navigation }: Props) {
    return (
        <View>
            <Text> Home </Text>
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
        </View>
    );
}
