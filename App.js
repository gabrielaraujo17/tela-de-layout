import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
return (

  <View style={styles.container}>
   
  <View style={styles.IMG}>
    <Image
      source={{ uri: './img/imagen01.jpg' }}
      style={styles.img}
    />
    <Image
      source={{ uri: './img/imagem02.jpg' }}
      style={styles.img}
    />
    <Image
      source={{ uri: './img/imagem03.jpg' }}
      style={styles.img}
    />
  </View>

  <View >
    <Image
      source={{ uri: './img/imagem04.jpg' }}
      style={styles.img1}
    />
  </View>

  <TextInput
    style={styles.input}
    placeholder="Username"
  />
  <TextInput
    style={styles.input}
    placeholder="Password"
    secureTextEntry
  />
  <Button
    title="Login"
    color={'orange'}
  />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',
},
IMG: {
flexDirection: 'row',
gap: 5
},
img: {
width: 100,
height: 100,
margin: 5,
},
img1: {
width: 300,
height: 300,
margin: 5,
},
input: {
height: 40,
borderColor: 'orange',
borderWidth: 1,
marginBottom: 10,
paddingLeft: 10,
width: '80%',
},
});

  