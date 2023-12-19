import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {fontType, colors } from '../../assets/theme';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');

      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const { userToken, expirationTime } = userData;

        if (userToken && expirationTime) {
          const currentTime = new Date().getTime();

          if (currentTime <= expirationTime) {
            setTimeout(() => {
              navigation.replace('MainApp');
            }, 1500);
          } else {
            setTimeout(() => {
              navigation.replace('Login');
            }, 1500);
          }
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    } catch (error) {
      console.error('Error retrieving token data:', error);
      setTimeout(() => {
        navigation.replace('Login');
      }, 1500);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.blue(0.5), borderRadius: 25, marginHorizontal: 50}}>
        <Text style={styles.logo}>BLUELAGON</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.info, { fontFamily: fontType['Pjs-Regular'] }]}>
          Versi 0.3
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #00b4db, #0083b0)', 
    paddingVertical: 32,
    justifyContent: 'center',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeIn 1.2s ease forwards',    
  },
  logo: {
    fontSize: 48,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
    textShadowColor: 'rgba(0, 0, 0, 0.40)',  
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 8, 
    alignSelf: 'center',
  },
  infoContainer: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingBottom: 32,
  },
  info: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: colors.grey(0.6),
  },
});
