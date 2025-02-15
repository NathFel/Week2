import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Latih1 = () => {
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>
            
            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>

            <View style={styles.imageContainer}>
                <Image source={require('./assets/download.png')} style={styles.image} />
            </View>
            <Text style={styles.tekssaya}>Nathanael Felix</Text>
            <Text style={styles.tekssaya}>00000069434</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tekssaya: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginTop: 25
    },
    image: {
        width: 100,
        height: 100
    }
});

export default Latih1;