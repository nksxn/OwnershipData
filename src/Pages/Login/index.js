import React from 'react';
import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style= {styles.container}>
        <Image source={require('./../../Images/logo.png')} />

        <View>
          <Input placeholder="Username" placeholderTextColor="#C0C0C0" />
        </View>

        <View>
          <Input
            placeholder="Password"
            placeholderTextColor="#C0C0C0"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.loginText}>  <Image source ={require('./../../Images/cloudUpload.png')} />Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
