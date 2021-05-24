import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../firebase'


const Register = ({ navigation }) => {
    const register = () => {
        try{
            auth.createUserWithEmailAndPassword(email,password);
            navigation.navigate('Login')
        }catch(err){
            console.log(err);
        }
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
            }}
            style={{width: 100, height: 100, borderRadius: 50, paddingBottom: 30}}
            />
            <Input  placeholder = "Enter Name" value={name} onChangeText={(n)=>setName(n)} />
            <Input  placeholder = "Enter Email" value={email} onChangeText={(text)=>setEmail(text)} />
            <Input secureTextEntry placeholder = "Enter Password" value={password} onChangeText={(pass)=>setPassword(pass)}/>
            <Input placeholder = "Enter Phone Number" keyboardType="numeric" value={phone} onChangeText={(num)=>setPhone(num)}/>
            <Button title="Register" buttonStyle={{width: 200}} onPress={register} />
            <Text style={{height: 20,}} />
            <Button buttonStyle={styles.button} title="Login" type="outline" onPress={()=>navigation.navigate('Login')} />
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        width: 200,
    }
})
