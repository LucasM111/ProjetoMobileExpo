//Questão D3 da prova
import React from "react";
import { TouchableOpacity, StyleSheet, Button, Text, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    btntela: {
        width: 350,
        height: 100,
        backgroundColor: '#b7ff00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },
});


const Tela2 = ({ navigation }: any) => {
    const navegar = () => { navigation.navigate('Tela1') };

    return (
        <SafeAreaView>
            <Text>Tela 2</Text>
            <TouchableOpacity
                style={style.btntela}
            >
                <Button
                    onPress={navegar}
                    title="Ir para a tela 1"
                />
            </TouchableOpacity>
        </SafeAreaView >
    );
}

export default Tela2;