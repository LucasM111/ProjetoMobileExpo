import { SafeAreaView } from "react-native-safe-area-context";


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

        </SafeAreaView>
    );
}

export default Details;