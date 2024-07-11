import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput 
        placeholder='Jhon@email.com'
        style ={styles.textInput}

      /> 
      <TextInput 
      placeholder='password'
      style={styles.textInput}


      /> 


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{ 
    fontSize: 80,
    color: '#000',
    fontWeight: 'bold'
  },
  subTitle: { 
  fontSize: 20,
  color:'gray',
  },
  textInput:{ 
  borderWidth:1,
  borderColor: 'gray',
  padding: 10,
  width:'80%',
  height:50,
  marginTop: 20,
  borderRadius: 30,

  }
   

});
