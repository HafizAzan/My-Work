import { View, StyleSheet, Text } from 'react-native';
import { Countdown } from '../Countdown/Countdown';
import { ProgressBar } from 'react-native-paper';
import RoundedButton from '../RoundedButton/RoundedButton';
import React from 'react';

const Timings = ({
  minutes,
  setCurrentSubject,
  currentSubject = '',
  setFocusHistory,
}) => {
  const [isPaused, setPaused] = React.useState(false);
  const [progressBar, setProgressBar] = React.useState(1);

  const startStopBtnHandler = () =>{
    setPaused(!isPaused)
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Countdown
          minutes={minutes}
          onProgress={(percentage) => setProgressBar(percentage)}
          isPaused={isPaused}
          onEnd={() => {
            setCurrentSubject(null);
            setFocusHistory((focusHistory) => [
              ...focusHistory,
              currentSubject,
            ]);
          }}
        />
        <Text style={styles.text}>Focusing On {currentSubject}</Text>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar progress={progressBar} />
      </View>

      <View style={styles.startStopBtn}>
        <RoundedButton title={isPaused ? "Start" : "Stop"} onPress={startStopBtnHandler} size={60}/>
        <RoundedButton title="Back" onPress={() => setCurrentSubject(null)} size={60} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 55,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: '14px',
  },
  progressBar: {
    marginTop: 20,
  },
  startStopBtn: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default Timings;
