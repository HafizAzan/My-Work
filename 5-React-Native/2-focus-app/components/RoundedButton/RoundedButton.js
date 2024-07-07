import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../Countdown/Countdown.jsx';
import RoundedButton from '../RoundedButton/RoundedButton';

const Timings = ({currentSubject="",minutes,setCurrentSubject}) => {
  const [progressBar,setProgressBar] = React.useState(1);
  const [isPaused,setIsPaused] = React.useState(false);
  

  const startStopBtnHandler = () => {
    setIsPaused(!isPaused);
  }
  return <View style={styles.mainContainer}>
  
  <View style={styles.container} >
        <Countdown 
        minutes={minutes} 
        isPaused={isPaused} 
        onProgress={(percentage) => {
          setProgressBar(percentage);
        }}
        onEnd={()=>{
          setCurrentSubject(null);
        }}
        />
   <Text style={styles.text}>Focusing on: {currentSubject}</Text>


  
  </View>
   <View style={styles.progressBar}>
      <ProgressBar progress={progressBar}   />
   </View>

   <View style={styles.startStopBtn}>
       <RoundedButton title={isPaused ? "Start" : "Stop"} size={60} onPress={startStopBtnHandler} />


        <RoundedButton title="Back" size={60} onPress={() => {
          setCurrentSubject(null);
        }} />
   </View>
  </View>;
}


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 55
  },
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: "14px"
  },
  progressBar: {
    marginTop: 20
  },
  startStopBtn:{
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
})

export default Timings;