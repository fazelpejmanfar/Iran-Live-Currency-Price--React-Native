import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';

const List = ({name, buy, sell, img}) => {




    return (
        <View style={styles.wrapper}>
            <Text style={styles.Text}>
            <Image style={styles.tinyLogo} source={{uri: img}}/>  {name}
            </Text>
            <Text style={styles.buy}>
                {buy}
            </Text>
            <Text style={styles.sell}>
                {sell}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "95%",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "rgb(255 255 255 / 53%)",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        padding: 10,
        marginBottom: 5,
    },
    Text: {
        color: "black",
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
    },
    buy: {
        color: "#06ea06",
        fontWeight: 'bold',
    },
    sell: {
        color: "red",
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 30,
        height: 15,
      },
})

export default List;
