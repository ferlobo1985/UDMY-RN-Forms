import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";


import CustomInput from "./utils/input.custom";

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
        age:yup
        .number()
        .required("Age is required"),
        message:yup
        .string()
        .required("Message is required"),
    })


    return(
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios'?'padding':'position'}
            style={{flex:1}}
        >
        <ScrollView>
        <Formik
            initialValues={{email:'',password:'',age:'',message:''}}
            onSubmit={values=>console.log(values)}
            validationSchema={loginValidationSchema}
        >
        { ({ handleSubmit })=> (
        <View>

            <Field
                component={CustomInput}
                name="email"
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Field
                component={CustomInput}
                name="password"
                placeholder="Enter your password"
                secureTextEntry={true}
            />

            <Field
                component={CustomInput}
                name="age"
                placeholder="Enter your age"
                keyboardType="numeric"
            />

            <Field
                component={CustomInput}
                name="message"
                placeholder="Enter your message"
                multiline={true}
                numberOfLines={7}
            />

            <Field
                component={CustomInput}
                name="a"
                placeholder="Enter your message"
                multiline={true}
                numberOfLines={7}
            />


            <Field
                component={CustomInput}
                name="b"
                placeholder="Enter your message"
                multiline={true}
                numberOfLines={7}
            />


            <Field
                component={CustomInput}
                name="c"
                placeholder="Enter your message"
                multiline={true}
                numberOfLines={7}
            />


            {/* <TextInput
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
            } */}
            
            {/* <TextInput
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
            } */}

            <Button
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
        )}
        </Formik>
        </ScrollView>
        </KeyboardAvoidingView>
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
