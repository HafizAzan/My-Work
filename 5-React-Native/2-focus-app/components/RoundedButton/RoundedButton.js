import { TouchableOpacity, Text } from 'react-native';
import { colors } from '../../src/utils/colors';

const RoundedButton = (props) => {
  const { size = 35, title = '+', onPress = () => {} , } = props;

  return (
    <TouchableOpacity style={styles(size).radius} onPress={onPress}>
      <Text style={styles(size).text}>{title}</Text>
    </TouchableOpacity>
  );
};

// const size = 35;

// const styles = StyleSheet.create({
//   radius: {
//     borderRadius: size / 2,
//     width: size,
//     height: size,
//     borderColor: colors.white,
//     borderWidth: 2,
//     display:"flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   text: {
//      color: colors.white,
//      fontSize: size / 2
//   }
// })

const styles = (size) => {
  return {
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      borderColor: colors.white,
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  };
};

export default RoundedButton;
