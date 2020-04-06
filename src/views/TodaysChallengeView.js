import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
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
});
