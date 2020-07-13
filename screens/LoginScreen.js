import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    login=async(email, password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        alert("User does not exist")
                        break;
                    case 'auth/invalid-email':
                        alert("Incorrect email or password")
                        break;
                }
            }
        }
        else{
            alert("Enter email and password")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
                <View>
                    <Image
                    source = {require("../assets/booklogo.jpg")}
                    style={{width:200, height:200}}/>
                    <Text style={{textAlign:'center', fontSize:30}}>WiLy</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                    <TextInput
                    style={styles.loginBox}
                    placeholder="Enter Password"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:7}}
                    onPress={()=>{
                        this.login(this.state.emailId, this.state.password)
                    }}>
                        <Text style={{textAlign:'center'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})