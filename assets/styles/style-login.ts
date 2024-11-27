import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
    },

    container: {
        width: width,
        height: height,
        justifyContent: "space-around",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    
    header: {
        alignItems: "center"
    },

    back: {
        alignItems: "flex-start",
        marginRight: width * 0.75,
        marginTop: 20
    },

    logo: {
        height: height * 0.2,
        marginLeft: 25,
        resizeMode: "contain"
    },

    body: {
        alignItems: "center"
    },

    title: {
        width: width * 0.8,
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },

    label: {
        width: width * 0.8,
        color: "#FFF",
        fontSize: 20,
        marginBottom: 5
    },

    input: {
        width: width * 0.8,
        height: 50,
        color: "#FFF",
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
        borderColor: "#FFF",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#11111E"
    },

    button: {
        width: width * 0.8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#5BC2E7"
    },

    buttonText: {
        color: "#11111E",
        fontSize: 18,
        textAlign: "center"
    },

    text: {
        color: "#FFF",
        fontSize: 15,
        marginTop: 20
    },

    footer: {
        alignItems: "center",
        padding: 10
    },

    footerText: {
        color: "#FFF"
    }
});

export default styles;