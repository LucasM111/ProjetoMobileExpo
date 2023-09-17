import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, StyleSheet, ImageBackground } from "react-native";
import Base from "../components/Base";

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
    flag: {
        borderWidth: 2,
        borderRadius: 30,
        height: 200,
        width: 300,
        borderColor: '#000',
    }
})

type DetailsPrpos = {
    name: string;
    region: string;
    capital: string;
    languages: any;
    flags: string;
    bname: string;
};

const backImage = { uri: 'https://i.pinimg.com/564x/c7/98/59/c798591021a4187b4f11abfcb31960a6.jpg' };

const Details = ({ name, region, capital, languages, flags, bname }: DetailsPrpos) => {
    return (
        <ImageBackground source={backImage}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.flag} source={{ uri: flags }} alt={bname} />
                <View style={styles.card}>
                    <Base texto="Nome" valor={name} />
                    <Base texto="Região" valor={region} />
                    <Base texto="Capital" valor={capital[0]} />
                    <Base texto="Idioma" valor={languages[Object.keys(languages)[0]]} />
                </View>
            </SafeAreaView>
        </ImageBackground>

    );
}

export default Details;