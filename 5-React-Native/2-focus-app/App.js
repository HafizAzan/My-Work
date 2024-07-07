import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';
import { PLATFORM } from "./src/utils/constant";
import { colors } from "./src/utils/colors";
import FocusInput from './components/FocusInput/FocusInput';
import Timings from './components/Timings/Timings.jsx';


export default function App() {
  const [currentSubject,setCurrentSubject] = React.useState("asdasdasd");

   const [minutes,setMinutes] = React.useState(0.1);

  const roundedBtnClicked = (value) => {
    setCurrentSubject(value)
  };
  return (
    <SafeAreaView style={styles.container}>
     {currentSubject ? 
     <Timings 
     currentSubject={currentSubject} 
     minutes={minutes}
     setCurrentSubject={setCurrentSubject}   
     />
     :  <FocusInput roundedBtnClicked={roundedBtnClicked} />    
     }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PLATFORM.OS === PLATFORM.ANDROID ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
