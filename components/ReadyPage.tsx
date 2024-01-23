import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "../style/styles";

interface ReadyPageProps {
};

const ReadyPage: React.FC<ReadyPageProps> = () => {
    return(
        <View>
            <Text style={styles.readyPageText}>Spremni ste za airsoft susret!</Text>
        </View>
    );
}

export default ReadyPage;