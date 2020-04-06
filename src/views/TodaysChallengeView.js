import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function() {
  return (
    <ImageBackground
      source={require('../assets/tagebuch.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.todaysChallengeContainer}>
          <Text style={styles.todaysChallengeText}>
            Deine heutiges Abenteuer
          </Text>
        </View>
        <CustomButton style={styles.tapHereButton}>
          <Text style={styles.tapHereButtonText}>Hier tippen</Text>
        </CustomButton>
      </View>
    </ImageBackground>
  );
}

const CustomButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{...props.style}}>{props.children}</View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 24,
    alignItems: 'center',
  },
  todaysChallengeContainer: {
    marginTop: 12,
    padding: 15,
    borderRadius: 30,
    color: '#666',
    backgroundColor: '#EAEAEA9A',
    alignItems: 'center',
  },
  todaysChallengeText: {
    textAlign: 'center',
    fontSize: 34,
    opacity: 1,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  tapHereButton: {
    marginTop: 12,
    padding: 15,
    borderRadius: 15,
    color: '#666',
    backgroundColor: '#EAEAEA9A',
    alignItems: 'center',
    marginBottom: 50,
  },
  tapHereButtonText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
