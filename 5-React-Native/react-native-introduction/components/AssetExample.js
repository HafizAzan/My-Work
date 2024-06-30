import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import react ,{useState} from "react"
export default function Count() {
  const [count , setCount] = useState(0)
  const incrementHandler = () =>{
    setCount((count)=> count + 1)
  }

    const decrementHandler = () =>{
      if(count <= 0){
        return null
      }
    setCount((count)=> count - 1)
  }

  return (
    <View style={styles.container}>
    <Text style={styles.number}>{count}</Text>

    <TouchableOpacity onPress={incrementHandler}>
    <Text style={styles.btn}>increment</Text>
    </TouchableOpacity>
    
      <TouchableOpacity onPress={decrementHandler}>
    <Text style={styles.btn}>decrement</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:90
  },
  number: {
    color:"red",
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    color:"purple",
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:"yellow",
    marginBottom:10
  }
});
