import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VoicePicker from './src/components/VoicePicker';
import ValueChanger from './src/components/ValueChanger';
import Input from './src/components/Input';
import Button from './src/components/Button';
import Tts from 'react-native-tts';

  const expText =`Lately, I've been, I've been losing sleep
  Dreaming about the things that we could be
  But baby, I've been, I've been praying hard
  `

const App = () => {
  const [rate, setRate] = useState(0);
  const [picth, setPitch] = useState(0);
  const [text, setText] = useState(expText);



  function onPress() {
   Tts.setDefaultRate(0.2)
  }
  function PlayVoice (){
    console.log('RATE' ,rate );
    
    Tts.speak(text)
  }
  function StopVoice(){
    
    Tts.stop()
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>The Voice Over</Text>
        </View>
        <VoicePicker />
        <ValueChanger title="Rate" value={rate} setValue={setRate} />
        <ValueChanger title="Pitch" value={picth} setValue={setPitch} />
        <Input text={expText} setText={setText} placeholder="Enter Input" />
        <View style={styles.buttonContainer}>
          <Button title="Play" onPress={PlayVoice} />
          <Button title="Stop" onPress={StopVoice } />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  body: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(0,0,0,0.12)',
    borderWidth: 1.3,
    height: 500,
    width: '100%',
    borderRadius: 15,
  },
  headerContainer: {
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    borderBottomWidth: 1.3,
    backgroundColor: 'coral',
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
