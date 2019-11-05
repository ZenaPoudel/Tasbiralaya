import React, {Component} from 'react';
import {View,Alert, Text, TextInput, Image, TouchableHighlight, KeyboardAvoidingView,AsyncStorage} from 'react-native';
import axios from 'axios';

function email_validation(email) {
    if(email!==""){
        return true;
    }
}
export class Login extends Component{
    constructor(){
        super();
        this.state={
            email: 'shures.nepali@gmail.com',
            password: 'shures666',
            error_message: '',
            redirect:false
        };
        this.handleLogin =  this.handleLogin.bind(this);
    }

    handleLogin(event) {
        Alert.alert("hello");
       try{
             axios({
                    method: 'post',
                    url: 'http:// 192.168.100.88:8000/account/login',
                    data: {email: this.state.email, password: this.state.password}
                }).then((response) => {
                    AsyncStorage.setItem("token", response.data.token);
                    AsyncStorage.setItem("username",response.data.username);
                    AsyncStorage.setItem("fn",response.data.fn);
                    AsyncStorage.setItem("id", response.data.id).done()
                    this.props.navigation.navigate('Home')
            });
       }catch(e){

       }
    }
    render(){
        return(
           <KeyboardAvoidingView behavior='padding' style={{flex:1,alignItems:'center',paddingTop:40}}>
                <View style={{flex:1,alignItems:'flex-start',width:'70%'}}>
                    <View style={{height:80,width:80,backgroundColor:'#22addc',borderRadius:80,justifyContent:"center",alignItems:'center'}}>
                    <Image
                    style={{width: 100, height: 100}}
                    source={require('./../assets/icons/logo.png')}
                    />
                    </View>
                    <Text style={{color:'black',fontSize:22,marginTop:20,marginBottom:20}}>Tasbiralaya</Text>
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%'}}
                        placeholder="Username"
                        placeholderTextColor='#22addc'
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%',marginTop:20}}
                        placeholder="Password"
                        placeholderTextColor='#22addc'
                        onChangeText={(password) => this.setState({password})}
                    />
                    <TouchableHighlight onPress={this.handleLogin} style={{alignItems:'center',width:'60%',paddingTop:10,paddingBottom:10,marginTop:30,borderRadius:25,backgroundColor:'#22addc'}}>
                        <Text style={{color:'white'}}>Login</Text>
                    </TouchableHighlight>
                    <View style={{marginTop:20,flexDirection:'row'}}>
                        <Text>Don't have an account ? </Text>
                        <Text onPress={()=>this.props.navigation.navigate("Signup")} style={{color:'black'}}>sign up</Text>
                    </View>
                    <Text style={{color:'black',marginTop:10}}>forget password</Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}