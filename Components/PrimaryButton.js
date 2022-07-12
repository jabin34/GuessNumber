import { View,Text,Pressable ,StyleSheet} from "react-native";


const PrimaryButton = ({children}) => {
    function pressHandler(){
        console.log('press');
    }
    return (
       
       <View style={styles.buttonOuterContainer}>
         <Pressable style={styles.container} onPress={pressHandler} android_ripple={{color:'#640233'}}>
          <Text style={styles.buttonText}>{children}</Text>  
          </Pressable>
        </View>
      
        
    );
};

export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
container:{
   backgroundColor: "#72063c",
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    margin:4,
    elevation:2
},
buttonText:{
    color:'white',
   textAlign:'center'
}

}
);