import React, { Component } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-native-reanimated-carousel";

import styles from "../assets/styles/style-home";

class HomeScreen extends Component {
  render() {
    const width = Dimensions.get("window").width;

    const highlights = [
        { id: "1", image: require("../assets/images/posters/poster_01.png") },
        { id: "2", image: require("../assets/images/posters/poster_02.png") },
        { id: "3", image: require("../assets/images/posters/poster_03.png") },
        { id: "4", image: require("../assets/images/posters/poster_04.png") }
    ];

    const popularOnSeven = [
        { id: "1", image: require("../assets/images/posters/poster_05.png") },
        { id: "2", image: require("../assets/images/posters/poster_06.png") },
        { id: "3", image: require("../assets/images/posters/poster_07.png") },
        { id: "4", image: require("../assets/images/posters/poster_08.png") },
        { id: "5", image: require("../assets/images/posters/poster_09.png") },
        { id: "6", image: require("../assets/images/posters/poster_10.png") },
        { id: "7", image: require("../assets/images/posters/poster_11.png") },
        { id: "8", image: require("../assets/images/posters/poster_12.png") },
        { id: "9", image: require("../assets/images/posters/poster_13.png") },
        { id: "10", image: require("../assets/images/posters/poster_14.png") }
    ];

    const trending = [
        { id: "1", image: require("../assets/images/posters/poster_15.png") },
        { id: "2", image: require("../assets/images/posters/poster_16.png") },
        { id: "3", image: require("../assets/images/posters/poster_17.png") },
        { id: "4", image: require("../assets/images/posters/poster_18.png") },
        { id: "5", image: require("../assets/images/posters/poster_19.png") },
        { id: "6", image: require("../assets/images/posters/poster_20.png") },
        { id: "7", image: require("../assets/images/posters/poster_21.png") },
        { id: "8", image: require("../assets/images/posters/poster_22.png") },
        { id: "9", image: require("../assets/images/posters/poster_23.png") },
        { id: "10", image: require("../assets/images/posters/poster_24.png") }
    ];

    const action  = [
        { id: "1", image: require("../assets/images/posters/poster_25.png") },
        { id: "2", image: require("../assets/images/posters/poster_26.png") },
        { id: "3", image: require("../assets/images/posters/poster_27.png") },
        { id: "4", image: require("../assets/images/posters/poster_28.png") },
        { id: "5", image: require("../assets/images/posters/poster_29.png") },
        { id: "6", image: require("../assets/images/posters/poster_01.png") },
        { id: "7", image: require("../assets/images/posters/poster_02.png") },
        { id: "8", image: require("../assets/images/posters/poster_03.png") },
        { id: "9", image: require("../assets/images/posters/poster_04.png") },
        { id: "10", image: require("../assets/images/posters/poster_05.png") }
    ];

    return(
        <SafeAreaView>

            <View style={ styles.container }>

                <Header navigation={ this.props.navigation } />

                <ScrollView>

                    <View style={ styles.body }>

                        <Carousel
                            loop
                            style={ styles.carouselPrimary }
                            width={ width }
                            autoPlay={ true }
                            data={ highlights }
                            scrollAnimationDuration={ 1500 }
                            renderItem={({ item }) => (
                                <TouchableOpacity style={ styles.carouselItemPrimary }>
                                    <Image
                                        source={ item.image }
                                        style={ styles.carouselImagePrimary }
                                    />
                                </TouchableOpacity>
                            )}
                        />

                        <Text style={ styles.title }>Popular no Seven+</Text>
                        <Carousel
                            loop
                            style={ styles.carouselSecondary }
                            width={ width * 0.4 }
                            data={ popularOnSeven }
                            scrollAnimationDuration={ 2000 }
                            renderItem={({ item }) => (
                                <TouchableOpacity style={ styles.carouselItemSecondary }>
                                    <Image
                                        source={ item.image }
                                        style={ styles.carouselImageSecondary }
                                    />
                                </TouchableOpacity>
                            )}
                        />

                        <Text style={ styles.title }>Em alta</Text>
                        <Carousel
                            loop
                            style={ styles.carouselSecondary }
                            width={ width * 0.4 }
                            data={ trending }
                            scrollAnimationDuration={ 2000 }
                            renderItem={({ item }) => (
                                <TouchableOpacity style={ styles.carouselItemSecondary }>
                                    <Image
                                        source={ item.image }
                                        style={ styles.carouselImageSecondary }
                                    />
                                </TouchableOpacity>
                            )}
                        />

                        <Text style={ styles.title }>Ação</Text>
                        <Carousel
                            loop
                            style={ styles.carouselSecondary }
                            width={ width * 0.4 }
                            data={ action }
                            scrollAnimationDuration={ 2000 }
                            renderItem={({ item }) => (
                                <TouchableOpacity style={ styles.carouselItemSecondary }>
                                    <Image
                                        source={ item.image }
                                        style={ styles.carouselImageSecondary }
                                    />
                                </TouchableOpacity>
                            )}
                        />

                    </View>

                </ScrollView>

                <Footer navigation={ this.props.navigation } />

            </View>

        </SafeAreaView>
    );
  }
}

export default HomeScreen;