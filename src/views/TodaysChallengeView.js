import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function() {
  return (
    <View style={styles.container}>
      <View style={styles.todaysChallengeContainer}>
        <Text style={styles.todaysChallengeText}>Deine heutiges Abenteuer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  todaysChallengeText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 36,
  },
});
