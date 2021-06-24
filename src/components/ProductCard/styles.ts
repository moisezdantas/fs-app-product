import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    productTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        flex:1
    },
    card: {
        padding: 20,
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10
    },
    quantity: {
        fontSize: 14,
    },
    priceSection: {
        flexDirection: 'row',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
    },
});