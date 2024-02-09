import React from 'react';
import { StyleSheet} from 'react-native';
import { Button } from "native-base";
import { View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';
const CustomGreenButton = ({label,onPress}) => {
    return (
        <Button  style={{
            width:"50%",
          alignContent:"center",
          alignItems:"center",
            backgroundColor:COLORS.greenColor
           }} onPress={onPress}>
           <View style={{
            alignItems:"center",
            display:"flex",
            flexDirection:"row",
            alignContent:'center',
            justifyContent:"center"
            }}>
            <Text
            style={{color:"white",
            // :"22%",
            textAlign:'center',           fontWeight: "bold",
           fontSize: 17
            }}>
              {label}
            </Text>
    </View>
           </Button>
    );
}

const styles = StyleSheet.create({})

export default CustomGreenButton;

