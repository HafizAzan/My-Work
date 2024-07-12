import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { PLATFORM } from './src/utils/constant';
import { colors } from './src/utils/colors';
import FocusInput from './components/FocusInput/FocusInput';
import React from 'react';
import Timings from './components/Timings/Timings';

export default function App() {
  const [currentSubject, setCurrentSubject] = React.useState(null);
  const [minutes, setMinutes] = React.useState(null);
  const [focusHistory, setFocusHistory] = React.useState([]);

  const btnHandler = (value) => {
    setCurrentSubject(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timings
          minutes={minutes}
          currentSubject={currentSubject}
          setCurrentSubject={setCurrentSubject}
          setFocusHistory={setFocusHistory}
        />
      ) : (
        <FocusInput
          btnHandler={btnHandler}
          minutes={minutes}
          setMinutes={setMinutes}
          focusHistory={focusHistory}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PLATFORM.IOS === PLATFORM.ANDROID ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  }
});
