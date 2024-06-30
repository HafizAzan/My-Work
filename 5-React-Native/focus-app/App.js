import { StatusBar, View, StyleSheet,Platform } from 'react-native';
import { color } from './src/utils/color';
import { PLATFORM } from "./src/utils/contant"

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    // display:"flex",
    // flexGrow:1,
    flex: 1,
    padding: Platform.OS === PLATFORM.ANDROID ?  StatusBar.currentHeight : 0,
    backgroundColor: color.darkBlue,
  },
});
