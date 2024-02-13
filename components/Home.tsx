import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Item from "./Item";
import { styles } from "../style/styles";

interface HomeProps {
    navigation: any;
};

interface Item {
    _id: number;
    title: string;
    required?: boolean;
    selected: boolean;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [IsAllRequiredItemsSelected, setIsAllRequiredItemsSelected] = useState(false);


    const handleFetchData = async () => {
            const apiUrl = 'https://airsoft-app-backend.onrender.com/Home';
        
            // Fetch data using the fetch API
            fetch(apiUrl)
              .then(response => response.json())
              .then(data => { 
                setItems(data);
            })
              .catch(error => console.error('Error fetching data:', error));
    }   

    useEffect(() => {
    handleFetchData();
    }, [])

    useEffect(() => {
        checkRequiredItemsSelected(items);
    }, [items]);

    const handleItemPress = (itemId: number) => {
        // Update the 'items' state using the previous state
        setItems(prevItems => {
            // Map over the previous items array
            return prevItems.map(item => {
                // Check if the current item's id matches the itemId parameter
                if (item._id === itemId) {
                    // If matched, toggle the 'selected' property
                    return { ...item, selected: !item.selected };
                }
                // If not matched, return the item unchanged
                return item;
            });
        });
    };

    const checkRequiredItemsSelected = (AllItems: Item[]) => {
        // Use Array.every() to check if all required items are selected.
        // If an item is not required, it is considered selected.
        const areAllRequiredItemsSelected = AllItems.every(item => !item.required || item.selected);
        // Update the state to reflect whether all required items are selected.
        setIsAllRequiredItemsSelected(areAllRequiredItemsSelected);
    };

    return(
        items && <View>
            <FlatList 
                data={items} 
                renderItem={({ item }) => <Item item={item} handleItemPress={handleItemPress}/>}
                keyExtractor={(item) => item._id.toString()}
            />
            { IsAllRequiredItemsSelected ?
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReadyPage')}>
                <Text style={styles.buttonText}>Spreman sam!</Text>
            </TouchableOpacity> : <TouchableOpacity style={styles.disabledButton} disabled>
                <Text style={styles.buttonText}>Spreman sam!</Text>
            </TouchableOpacity>}
        </View>
    );
}

export default Home;