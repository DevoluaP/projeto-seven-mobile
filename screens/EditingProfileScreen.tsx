import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "../assets/styles/style-editing-profile";

class EditingProfileScreen extends Component {
  state = {
    profileImage: null,
  }
    
  chooseImage = () => {
    const options = {
      mediaType: "photo",
      includeBase64: true,
    }
    
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const { uri } = response.assets[0];
        this.setState({ profileImage: uri });
      }
    });
  }

  render() {
    return(
      <View style={ styles.container }>

        <View style={ styles.header }>

          <TouchableOpacity
            style={ styles.back } 
            onPress={ () => this.props.navigation.goBack() }
          >
            <FontAwesome name="arrow-left" size={ 30 } color="#FFF" />
          </TouchableOpacity>

          <Text style={ styles.title }>Editar perfil</Text>

        </View>

        <View style={ styles.body }>

          <TouchableOpacity style={ styles.imagePicker } onPress={ this.chooseImage }>
            {this.state.profileImage ? (
              <Image
                  source={{ uri: this.state.profileImage }}
                  style={ styles.profileImage }
              />
            ) : (
              <FontAwesome name="camera" size={ 50 } color="#FFF" />
            )}
          </TouchableOpacity>

          <Text style={ styles.label }>Nome do perfil</Text>
          <TextInput style={ styles.input } />

          <TouchableOpacity
            style={ styles.button }
            onPress={ () => this.props.navigation.navigate("EditProfile") }
          >
            <Text style={ styles.buttonText }>Pronto</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

export default EditingProfileScreen;