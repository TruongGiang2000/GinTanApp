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
import auth from '@react-native-firebase/auth';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    GoogleSignin.configure({
      webClientId:
        '788942298698-uaegkcginvoqfils2959avq9ojhu29n9.apps.googleusercontent.com',
      androidClientId:
        '788942298698-ctjl9rsohi5bg9if9g246gdnf1je9981.apps.googleusercontent.com',
    });
    async function onFacebookTouch() {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      // Sign-in the user with the credential
      const resultauth = auth().signInWithCredential(facebookCredential);
      if (resultauth) {
        console.log('Successfully');
      }
    }
    async function onGoogleTouch() {
      const {idToken} = await GoogleSignin.signIn();
      const googleCreditial = auth.GoogleAuthProvider.credential(idToken);
      const result = auth().signInWithCredential(googleCreditial);
      if (result) {
        console.log('Successfully');
      }
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0094a7" barStyle="light-content" />
        <ImageBackground
          source={require('../Images/BackgroundLogin.png')}
          style={styles.image}>
          <View>
            <Text style={{color: '#000', fontSize: 18, marginTop: 60}}>
              Đăng Nhập
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
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              width: 230,
            }}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <CircleCheckBox
                checked={true}
                onToggle={checked => console.log('My state is: ', checked)}
                labelPosition={LABEL_POSITION.RIGHT}
                label="Remember me?"
                outerSize={14}
                filterSize={10}
                styleLabel={{
                  fontSize: 10,
                  fontFamily: 'Myriad Pro Bold SemiExtended',
                }}
              />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontFamily: 'Myriad Pro Bold SemiExtended',
                  fontSize: 10,
                }}>
                Forget password ?
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 230,
              height: 45,
              backgroundColor: '#faa31b',
              marginTop: 10,
              borderRadius: 11,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#fff',
            }}>
            <Text style={{fontSize: 16, color: '#ffffff', fontWeight: 'bold'}}>
              Sign in
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 230,
              height: 45,
              backgroundColor: '#101140',
              marginTop: 10,
              borderRadius: 11,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#fff',
            }}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{fontSize: 16, color: '#ffffff', fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', width: 230}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 90,
                height: 45,
                marginTop: 10,
                backgroundColor: '#4167b0',
                borderRadius: 11,
              }}
              onPress={() => onFacebookTouch()}>
              <Image source={require('../Images/facebook.png')} />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'flex-end',
                margin: 10,
              }}>
              <Text>OR</Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 90,
                height: 45,
                marginTop: 10,
                backgroundColor: '#fff',
                borderRadius: 11,
              }}
              onPress={() => onGoogleTouch()}>
              <Image source={require('../Images/google2.png')} />
            </TouchableOpacity>
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    width: 230,
    height: 45,
    marginTop: 10,
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
