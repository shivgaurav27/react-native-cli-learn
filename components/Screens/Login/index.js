import React , {useState}from 'react'
import { View , StyleSheet} from 'react-native';
import {  Input , Image , Button} from 'react-native-elements';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
         <Image
        source={{
          uri:
            "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg",
        }}
        style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 20 }}
      />
        <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} title="Login"  />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />


  
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
      },
      inputContainer: {
        width: 300,
      },
      button: {
        width: 200,
        marginTop: 10,
      },
     
     
})