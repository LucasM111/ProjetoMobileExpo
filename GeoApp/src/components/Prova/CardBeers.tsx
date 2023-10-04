import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, StyleSheet, ImageBackground } from "react-native";
import InfoBeers from "../prova/InfoBeers";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',


    },
    card: {
        borderWidth: 2,
        borderRadius: 20,
        margin: 5,
        padding: 14,
        width: 250,
        height: 110,
        backgroundColor: '#fff',
        alignItems: 'baseline',
        borderColor: '#fff'
    },

})

type CardBeersPrpos = {
    name: string;
    brand: string;
    style: string;
};


const CardBeers = ({ name, brand, style }: CardBeersPrpos) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <InfoBeers texto="Nome" valor={name} />
                <InfoBeers texto="Marca" valor={brand} />
                <InfoBeers texto="Estilo" valor={style} />
            </View>
        </SafeAreaView>
    );
}

export default CardBeers;