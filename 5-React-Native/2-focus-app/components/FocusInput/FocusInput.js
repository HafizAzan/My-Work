import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { spacing } from '../../src/utils/sizes';
import { colors } from '../../src/utils/colors';

const FocusInput = ({ btnHandler, minutes, setMinutes ,focusHistory }) => {
  const [textInput, setTextInput] = React.useState('');
  const RoundedBtnHandler = () => {
    btnHandler(textInput);
    setTextInput(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="What Would You Like to Focus On ?"
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
      />

      <TextInput
        label={`How long will you take ${textInput}`}
        onChangeText={(text) => setMinutes(text)}
        value={minutes}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btnContainer} onPress={RoundedBtnHandler}>
        <Text style={styles.btnText}>Start Timer</Text>
      </TouchableOpacity>

      {focusHistory?.length > 0 && (
        <View style={styles.focusHistoryContainer}>
          <Text style={styles.focusHistoryHeading}>Focus History</Text>

          {focusHistory?.map((singleWord) => {
            return <Text style={styles.focusHistoryItem}>{singleWord}</Text>;
          })}
        </View>
      )}
  

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    marginTop: spacing.lg,
    paddingLeft: spacing.lg,
    paddingRight: spacing.sm,
  },
  btnContainer: {
    border: '2px solid white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 20,
  },
  
  focusHistoryContainer: {
    paddingLeft: 24,
    marginTop: 10,
  },
  focusHistoryHeading: {
    color: colors.white,
    fontSize: 20,
  },
  focusHistoryItem: {
    color: colors.white,
    fontSize: 16,
  },
});

export default FocusInput;
