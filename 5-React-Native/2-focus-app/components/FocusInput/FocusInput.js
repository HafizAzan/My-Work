import React from 'react';
import {StyleSheet,View} from 'react-native';
import { TextInput } from 'react-native-paper';
import {spacing} from '../../src/utils/sizes';
import RoundedButton from '../RoundedButton/RoundedButton';

const FocusInput = ({roundedBtnClicked}) => {
  const [focusSubject, setFocusSubject] = React.useState("");
  
  const roundedBtnHandler = () => {
    roundedBtnClicked(focusSubject);
    setFocusSubject(null);
  }
  return <View style={styles.container}>
   <TextInput
      label="what would you like to focus on ?"
      value={focusSubject}
      onChangeText={text => setFocusSubject(text)}
    />

    <RoundedButton onPress={roundedBtnHandler} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: spacing.lg,
    paddingLeft: spacing.lg
  }
})


export default FocusInput;