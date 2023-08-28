import  React,{Dispatch,SetStateAction,useState} from 'react';
import { Text, TextInput,View, StyleSheet } from 'react-native';

export interface IInput {
    text:string,
    setText:Dispatch<SetStateAction<string>>,
    placeholder:string,
}

const Input = ({text,setText,placeholder}:IInput) => {
  return (
    <View style={styles.container}>
      <TextInput style ={styles.input} placeholder={placeholder} value={text} onChangeText={setText} multiline ={true}/>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  input:{
    marginLeft:15,
    height:200,
  }
});
