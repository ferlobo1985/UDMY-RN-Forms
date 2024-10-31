import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";


export default function FormComp(){

    const loginValidationSchema = yup.object({
        email:yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
        password:yup.
        string()
        .min(8,({min})=> `Password must be at least ${min} characters`)
        .required("Password is required"),
    })


    return(
        <>
        <Formik
            initialValues={{email:'',password:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={loginValidationSchema}
        >
        { ({handleChange, handleBlur, handleSubmit, values, errors, touched })=> (
        <View>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
            />
            {(errors.email && touched.email) &&
                <Text style={styles.errorLabel}>
                    {errors.email}
                </Text>
            }
            
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
            />
           {(errors.password && touched.password) &&
                <Text style={styles.errorLabel}>
                    {errors.password}
                </Text>
            }

            <Button
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
        )}
        </Formik>
        </>
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
