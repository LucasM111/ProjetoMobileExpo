import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList, SafeAreaView } from "react-native";
import CardBeers from "../components/prova/CardBeers";
//rota: https://random-data-api.com/api/v2/beers?size=10

type ListItemProps = {
    beers: {
        name: string;
        brand: string;
        style: string;
    }
}

const ListItem = ({ beers }: ListItemProps) => {
    return (
        <View>
            <CardBeers
                name={beers.name}
                brand={beers.brand}
                style={beers.style}
            />

        </View>
    );
}


const Beers = () => {
    const [beers, setBeers] = useState();
    const [loading, setLoading] = useState(false);

    const getBeers = useCallback(async () => {
        try {
            setLoading(true);

            const { data } = await axios.get("https://random-data-api.com/api/v2/beers?size=10");

            setBeers(
                data.map((beers: any) => ({
                    //nome, marca e estilo
                    name: beers.name,
                    brand: beers.brand,
                    style: beers.style

                }))
            )

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);

        }
    }, [])

    useEffect(() => {
        getBeers();
    })


    return (
        <SafeAreaView>
            {loading === true ? <ActivityIndicator /> :
                <FlatList data={beers}
                    renderItem={({ item }) =>
                        <ListItem beers={item} />}
                />}
        </SafeAreaView>
    );
}

export default Beers;