import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../firebase'


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        try{
            (auth.signInWithEmailAndPassword(email,password)) 
                
            .then(()=>{
                navigation.replace('Home')
            })
            
             
        }catch(err){
            Alert.alert(err);
        }
    }
    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
            }}
                style={{ width: 100, height: 100, borderRadius: 50, }}
            />
            <Input placeholder="Enter Email" type='email' value={email} onChangeText={(text)=>setEmail(text)} />
            <Input placeholder="Enter Password" secureTextEntry type='password' value={password} onChangeText={(text)=>setPassword(text)} />
            <Button title="Login" buttonStyle={styles.btn} onPress={signIn} />
            <Text style={{height: 20,}} />
            <Button buttonStyle={styles.btn} title="Register" type="outline" onPress={() => navigation.navigate('Register')} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 200,
    }
})
