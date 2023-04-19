import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/duolingo.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>I Already Have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  button2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});


export default ButtonPage;
