import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image } from "react-native";


type DetailsPrpos = {
    name: string;
    region: string;
    capital: string;
    languages: any;
    flags: string;
};

const Details = ({ name, region, capital, languages, flags }: DetailsPrpos) => {
    return (
        <SafeAreaView>
            <Image source={{ uri: flags }} />
            <Text>Nome: {name}</Text>
            <Text>Região: {region}</Text>
            <Text>Capital: {capital}</Text>
            <Text>Idioma: {languages}</Text>
        </SafeAreaView>
    );
}

export default Details;