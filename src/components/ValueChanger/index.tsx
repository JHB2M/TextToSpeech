import  React,{useState,useEffect,Dispatch,SetStateAction} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useDerivedValue
,runOnJS
} from 'react-native-reanimated';
export interface IValueChanger {
  title: string;
  value:number,
  setValue:Dispatch<SetStateAction<number>>
}

const ValueChanger = ({title,value,setValue}: IValueChanger) => {
  const progress = useSharedValue(1);

  // config the area of min or max value of progress
  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(Math.max(progress.value , 1), 300);
  });

  const rStyle = useAnimatedStyle(() => {
    console.log('Animation',progress.value)
    return {
      transform: [{translateX:adjustedTranslateX.value}]
    };
  });

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent,{x:number}>({
      onStart: event => {
        progress.value =event.translationX

      },
      onActive: (event,context) => {
        progress.value=(event.translationX ) 

      },
      onFinish  :event =>{
        runOnJS(isFinished)(event.translationX)
    }
    });

    function isFinished (val:number){
        console.log('Finish : ',val/30)
        setValue(Math.floor(val/30))
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} :</Text>
      <GestureHandlerRootView>
        <Animated.View>
          <View style={styles.bar}>
            <PanGestureHandler onGestureEvent={panGestureEvent} >
              <Animated.View style={[styles.roll, rStyle]} />
            </PanGestureHandler>
          </View>
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
};

export default ValueChanger;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  bar: {
    backgroundColor: 'gray',
    height: 3,
    width: '100%',
    marginTop: 15,
  },
  roll: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'coral',
    borderColor: 'rgba(0,0,0,0.12)',
    borderWidth: 1.3,
    position: 'absolute',
    top: -10,
    
  },
  title: {},
});
