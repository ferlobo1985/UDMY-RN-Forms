import { TextInput, Text,StyleSheet } from "react-native";

export default function CustomInput({
    field:{ name, onBlur, onChange, value},
    form:{ errors, touched, setFieldTouched },
    ...props
}){

    const inputError = errors[name] && touched[name];

    return(
        <>
            <TextInput
                style={[
                    styles.inputStyle,
                    inputError && styles.inputError
                ]}
                value={value}
                onChangeText={(text)=> onChange(name)(text)}
                onBlur={()=>{
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...props}
            />
            {inputError && 
                <Text style={styles.errorLabel}>
                    {errors[name]}
                </Text>
            }
        </>
    )
}


const styles = StyleSheet.create({
    errorLabel:{
        fontSize:15,
        marginBottom:20,
        color:'red'
    },
    inputError:{
        borderColor:'red'
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