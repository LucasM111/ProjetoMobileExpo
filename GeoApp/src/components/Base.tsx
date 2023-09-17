import React from 'react';
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cortexto: {
        color: '#000',
    },
});

type Base = {
    valor: string;
    texto: string;
};

const Base = ({ valor, texto }: Base) => {
    return (
        <Text style={styles.cortexto}>
            {texto}: {valor}
        </Text>
    );
}

export default Base;