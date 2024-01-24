import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#bbdfc2',
        fontSize: 22,
    },
    selectedContainer: {
        borderBottomColor: '#bbdfc2',
        backgroundColor: '#45a958',
    },
    touchableStyle: {
        width: '100%',
    },
    button: {
        fontSize: 16,
        color: '#ffffff',
        backgroundColor: '#2c7138',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 200,
        elevation: 3,
        marginTop: 30,
        opacity: 1,
    },
    disabledButton: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 200,
        elevation: 3,
        marginTop: 30,
        opacity: 1,
        backgroundColor: 'gray',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemTitle: {
        fontWeight: 'normal',
        color: '#333',
        marginRight: 8,
        fontSize: 22,
    },
    itemTitleRequired: {
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
        fontSize: 22,
    },
    required: {
        fontSize: 32,
        color: '#4b9e5a',
        marginRight: 8,
        lineHeight: 32,
    },
    containerFlex: {
        flexDirection: 'row',
    },
    itemSelected: {
        color: '#fff',
    },
    itemRequiredSelected: {
        color: '#fff',
        fontSize: 32,
        marginRight: 8,
        lineHeight: 32,
    },
    checkmark: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 28,
        textDecorationColor: 'black',
        textShadowColor: '#2c7138',
        textShadowRadius: 3,
    },
    readyPageText: {
        fontSize: 22,
        padding: 20,
        textAlign: 'center',
        fontWeight: '500',
        color: 'black'
    }
});