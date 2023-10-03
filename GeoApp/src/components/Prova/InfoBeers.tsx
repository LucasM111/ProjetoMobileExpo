import React from 'react';
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cortexto: {
        color: '#000',
    },
});

type Beers = {
    valor: string,
    texto: string,
};

const InfoBeers = ({ valor, texto }: Beers) => {
    return (
        <Text style={styles.cortexto}>
            {texto}: {valor}
        </Text>
    );
}

export default InfoBeers;