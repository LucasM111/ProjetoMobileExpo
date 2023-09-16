import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


type ListItemProps = {
    country: {
        name: string;
        region: string;
        capital: string;
        language: any;
        flags: string;

    };
}

const ListItem = ({ country }: ListItemProps) => {
    return (
        <View>
            name={country.name}
            region={country.region}
            capital={country.capital}
            language={country.language}
            flags={country.flags}
        </View>

    );
}


const Countries = () => {
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(false);

    const getCountry = useCallback(async () => {
        try {
            console.log("Teste2");
            setLoading(true);
            const { data } = await axios.get("https://restcountries.com/v3.1/all");

            setCountry(
                data.map((country: any) => ({
                    name: country.translations.por.official,
                    region: country.region,
                    capital: country.capital,
                    languages: country.languages,
                    flags: country.flags.png,
                }))
            )
        } catch (error) {
            console.log(error);
            console.log("Teste");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getCountry();
    }, []);

    return (
        <SafeAreaView>
            {loading === true ? <ActivityIndicator /> :
                <FlatList
                    data={country}
                    renderItem={({ item }) =>
                        <ListItem
                            country={item}
                        />}
                />}
        </SafeAreaView>
    );
}

export default Countries;