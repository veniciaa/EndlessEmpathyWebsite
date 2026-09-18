import React, {useState} from 'react';
import {View,Text, StyleSheet,TextInput,Button, Alert} from 'react-native';
export default function App(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = () => {
    Alert.alert('Form Submitted!', `Welcome, ${name}!`);
  };

  return(
    <View style={styles.container}>

    <Text style={styles.heading}>
    Registration Form
    </Text>

    <TextInput style={styles.input}
    placeholder ="Enter Name"
    value={name}
    onChangeText={setName}/>

    <TextInput style={styles.input}
    placeholder ="example@email.com"
    keyboardType="email-address"
    value={email}
    onChangeText={setEmail}/>

    <TextInput style={styles.input}
    placeholder ="Enter your password"
    secureTextEntry={true}
    value={password}
    onChangeText={setPassword}/>

    <View style={styles.button}>
    <Button
    title="Submit"
    color="green"
    onPress={handleSubmit}/> 
    </View>
        
    <View style={styles.button}>
    <Button
    title="Cancel"
    color="red"
    onPress={() => {}}/>
    </View>

    </View> 
      );
  }
  const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
  fontSize:24,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom: 20,
  },
  input:{
  width:'100%',
  borderWidth:1,
  borderColor:'grey',
  padding:10,
  marginBottom:15,
  borderRadius:5,
  },
  button:{
  marginTop:10,
  
  },

});