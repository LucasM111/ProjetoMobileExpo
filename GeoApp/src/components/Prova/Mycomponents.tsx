import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

//Questão D2 da Prova

const style = StyleSheet.create({
    compContainer: {
        height: 100,
        backgroundColor: "#03fcad",
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 30,
        color: "#000",
    }
});

type Componets = {
    texto: string;
}

const Mycomponents = ({ texto }: Componets) => {
    return (
        <SafeAreaView style={style.compContainer}>
            <Text style={style.texto}>{texto}</Text>

        </SafeAreaView>
    );
}

export default Mycomponents;