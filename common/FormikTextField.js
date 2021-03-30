import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const FormikTextField = (props) => {

    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];




    return (
        <View style={styles.inputContainer}>
            <Input
                style={[

                    hasError && styles.errorInput
                ]}
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </View>
    )
}

export default FormikTextField

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign:"center"
        
    },
    errorInput: {
        borderColor: 'red',
        
    }
})
