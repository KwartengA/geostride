import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Maps() {
return (
<View style={styles.container}>
    <TouchableOpacity
      style = {styles.mapBackground}
      
    >

    </TouchableOpacity>
    <TouchableOpacity
    style = {styles.minimalButton}
    onPress={() => {}}
    activeOpacity={0.6}
    >
    <Ionicons name="add-circle" size={35} color="green" />
    </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: { 
flex: 1, 
alignItems: 'center',
justifyContent: 'center'
},

minimalButton:{
    backgroundColor:'#02590F',
    width:56,
    height:56,
    borderRadius:18,
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#000',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    shadowRadius:4,
    elevation:4,
    position:'absolute',
    bottom: 24,
    right: 16,
},
mapBackground:{

}
});