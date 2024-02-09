import { Button, Text, View } from "native-base";
import { borderRadius } from "../../constants/theme";

 const CustomWhiteButton = ({label,onPress}) => {
    return (
        <Button  style={{
           borderWidth:2,
           borderRadius:15,
          borderColor:'black',
            width:"50%",
          alignContent:"center",
          alignItems:"center",
            backgroundColor:'white'
           }} onPress={onPress}>
           <View style={{
            alignItems:"center",
            display:"flex",
            flexDirection:"row",
            alignContent:'center',
            justifyContent:"center",
           
            // borderRadius: borderRadius.radius
            }}>
            <Text
            style={{color:"black",
            textAlign:'center',
           fontWeight: "bold",
           fontSize: 17
            }}>
              {label}
            </Text>
    </View>
           </Button>
    );
}

export default CustomWhiteButton;
