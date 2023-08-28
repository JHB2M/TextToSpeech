import React,{useRef,useState,useEffect} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ActionSheet ,{}from 'react-native-action-sheet'

const VoicePicker = () => {

    const sheetRef = useRef()
   

  return (
    <Pressable style={styles.container} onPress={null}>

      <Text style ={styles.text}>VoicePicker</Text>
      
    </Pressable>
  );
};

export default VoicePicker
const styles = StyleSheet.create({
  container: {
    padding:15,
    width:'100%',
    borderBottomColor:'rgba(0,0,0,0.12)',
    borderBottomWidth:1.3,
  },
  text:{
    fontSize:17,
    fontWeight:'500',

  }
});
