/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  Image,
} from 'react-native';
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0094a7" barStyle="light-content" />
        <ImageBackground
          source={require('../Images/Artboard.png')}
          style={styles.image}>
          <View
            style={{
              flex: 1.5,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Image source={require('../Images/Logo.png')} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flex: 4,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>Gin Tan</Text>
              <Text
                style={{
                  fontFamily: 'Orator-Std-Font',
                  fontSize: 16,
                  justifyContent: 'flex-start',
                }}>
                Just try hard
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontFamily: 'Orator-Std-Font',
                  fontSize: 14,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#898989',
                }}>
                © Design by Gin Tan
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'OCRAStd',
  },
});
