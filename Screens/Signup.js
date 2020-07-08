/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0094a7" barStyle="light-content" />
        <ImageBackground
          source={require('../Images/BackgroundLogin.png')}
          style={styles.image}>
          <View>
            <Text style={{color: '#000', fontSize: 18, marginTop: 40}}>
              Đăng Kí
            </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Image source={require('../Images/UserIcon.png')} />
            <TextInput
              style={{fontSize: 14}}
              placeholder="E-mail"
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image source={require('../Images/PasswordIcon.png')} />
            <TextInput
              style={{fontSize: 14}}
              placeholder="Mật khẩu"
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image source={require('../Images/PasswordIcon.png')} />
            <TextInput
              style={{fontSize: 14}}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="#000"
            />
          </View>
          <TouchableOpacity
            style={{
              width: 230,
              height: 45,
              backgroundColor: '#101140',
              marginTop: 20,
              borderRadius: 11,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#fff',
            }}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={{fontSize: 16, color: '#ffffff', fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    width: 230,
    height: 45,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    flex: 1,
  },
});
