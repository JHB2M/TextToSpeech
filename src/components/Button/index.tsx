import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export interface IButton{
    title:string,
    onPress :() =>void
}

const Button = ({title,onPress}:IButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style ={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    backgroundColor:'coral',
    alignItems:'center',
    padding:10,
    margin:10,
    borderRadius:10,

    flex:1,
  },
  title:{
    color:'white',
    fontSize:17,
    fontWeight:'500',

  }
});
