import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function FormComp(){
    return(
        <View>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter your email"
                // onChangeText={}
                // onBlur={}
                value={'gmail@gmail.com'}
                keyboardType="email-address"
            />
            <Text style={styles.errorLabel}>Error</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder="Enter your password"
                // onChangeText={}
                // onBlur={}
                value={'ssssss'}
                secureTextEntry={true}
            />
            <Text style={styles.errorLabel}>Error</Text>

            <Button
                title="Submit"
                
            />

        </View>
    )
}

const styles = StyleSheet.create({
    errorLabel:{
        fontSize:15,
        marginBottom:20,
        color:'red'
    },
    inputStyle:{
        borderRadius:10,
        height:50,
        borderWidth:1,
        borderColor:'grey',
        paddingLeft:20,
        fontSize:15,
        marginBottom:10
    }
})
