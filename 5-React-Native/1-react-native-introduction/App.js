import { Text, View, StyleSheet,Button , Alert} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Count from './components/AssetExample';

export default function App() {
  // const learnMoreHandler = () =>{
  //   Alert.alert("learn More About this in 2 min plz wait")
  // }
  return (
  //  <View style={styles.container}>
      // <View style={styles.containerItem}>
      // <Text>Div1</Text>
      // </View>
          
      //      <View style={[styles.containerItem2,styles.containerItem]}>
      // <Text>Div2</Text>
      // </View>    
      
      //   <View style={styles.containerItem}>
      // <Text>Div3</Text>
      // </View>
   
      //   <Button 
      //   title="Learn More"
      //   color="purple"
      //   accessibilityLabel="Learn more about this purple button"
      //   onPress={learnMoreHandler}
      //   />
  //  </View>
<Count/>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    height:200,
    alignItems:"center"
  },
  containerItem: {
border: "1px solid red"
  },
    containerItem2: {
      alignSelf:"flex-start"
  },
});
