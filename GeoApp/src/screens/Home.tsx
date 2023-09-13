// https://restcountries.com/v3.1/all

import React, { useCallback, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

/*Nome, Capital, Região, Lingua*/
type ListItemProps = {
    country: {
        flags: string;
        name: string;
        capital: string;
        region: string;
        linguage: string;
    }
}

const ListItem = ({ country }: ListItemProps) => {
    return (
        <View>
            <Text>{country.name}</Text>
        </View>
    )
}

const Home = () => {
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(false);

    const getCountry = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://restcountries.com/v3.1/all');
            setCountry(data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        getCountry()
    }, []);

    return (
        <SafeAreaView>
            <FlatList data={country} renderItem={({ item }) => <ListItem country={item} />} />

        </SafeAreaView>
    );
}

export default Home;