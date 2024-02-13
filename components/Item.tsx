import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "../style/styles";

interface ItemProps {
    item: {
        _id: number;
        title: string;
        required?: boolean;
        selected: boolean;
    },
    handleItemPress: (id: number) => void;
};

const Item: React.FC<ItemProps> = ({ item, handleItemPress }) => {

    return (
        <View style={[styles.container, item.selected && styles.selectedContainer]}>
            <TouchableOpacity style={styles.touchableStyle} onPress={() => handleItemPress(item._id)}>
                <View style={styles.containerFlex}>
                    <Text style={[item.required ? styles.itemTitleRequired : styles.itemTitle, item.selected && styles.itemSelected]}>{item.title}</Text>
                    {item.required && <Text style={item.selected ? styles.itemRequiredSelected : styles.required}>*</Text>}
                    {item.selected && <Text style={[styles.itemSelected && styles.checkmark, { marginLeft: 'auto' }]}>&#x2713;</Text>}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Item;