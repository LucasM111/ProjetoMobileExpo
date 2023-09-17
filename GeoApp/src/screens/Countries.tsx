import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "../components/Details";



type ListItemProps = {
    country: {
        name: string;
        region: string;
        capital: string;
        languages: any;
        flags: string;
        bname: string;

    };
}

const ListItem = ({ country }: ListItemProps) => {
    return (
        <View>
            <Details
                name={country.name}
                region={country.region}
                capital={country.capital}
                languages={country.languages}
                flags={country.flags}
                bname={country.bname}
            />
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
                    bname: country.flags.alt
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