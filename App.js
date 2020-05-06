import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Video } from 'expo-av';

const saludo = () => {
  Alert.alert('Hola mundo');
}

export default function App() {
  return (
    <ImageBackground source={require('./assets/montana.jpg')} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/espaduca.png')} style={styles.logo} />
        </View>
        <View style={styles.headerRight}>
          <Button title="Login" onPress={saludo} />
        </View>
      </View>
      <View style={styles.body}>
          <Text style={styles.negrita}>
            LA ESPADA DE FUEGO APP
          </Text>
          <TextInput placeholder="Nombre de usuario" placeholderTextColor="white"
          maxLength={8} style={{ borderWidth:1, borderColor: 'white', padding: 5, marginTop: 10, color: 'white'}}>
          </TextInput>
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            isLooping={false}
            useNativeControls={true}
            style={{ width: 300, height: 300, marginTop: 15 }}
          />
      </View>
      <View style={styles.footer}>
        <View style={styles.pie1}>
          <Text style={styles.negrita}>
            Pie1
          </Text>
        </View>
        <View style={styles.pie2}>
          <Text style={styles.negrita}>
            Pie2
          </Text>
        </View>
        <View style={styles.pie3}>
          <Image source={require('./assets/espaducamini.png')} style={styles.logo} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  negrita: {
    fontWeight: 'bold',
    color: 'white'
  },
  header: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 40
  },
  headerLeft: {
    flex: 1,
    marginTop: -10
    //backgroundColor: 'yellow'
  },
  headerRight: {
    flex: 0.3,
    marginRight: 10
    //backgroundColor: 'blue'
  },
  body: {
    flex: 1,
    //backgroundColor: 'red'
    alignItems: 'center'
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  pie1: {
    flex: 1,
    //backgroundColor: 'yellow',
    alignItems: 'center',
  },
  pie2: {
    flex: 1,
    //backgroundColor: 'blue',
    alignItems: 'center'
  },
  pie3: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain'
  }
});
