import React, {Component} from 'react';
import {View,Alert, Text, TextInput, Image, TouchableHighlight,AsyncStorage} from 'react-native';
import axios from 'axios';
function checkEmailValidation(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkPhoneValidation(phone) {
    return true
}
export class Signup extends Component{
    constructor() {
        super();
        this.state = {
            fullName: "Shures Nepali",
            email: 'shures.nepali@gmail.com',
            username: 'shures',
            password1: 'shures666',
            password2:'shures666',
            error:[],
            redirect:false,
            serverReply:'',
            status:'Sign Up'
        };
        this.handleSignUp = this.handleSignUp.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
    }
    checkValidation(){
        let error = this.state.error;
        this.setState({error:[]});

        let email = this.state.email;
        let username = this.state.username;
        let fullName = this.state.fullName;
        let password1 = this.state.password1;
        let password2 = this.state.password2;

        if (email.length === 10 && !isNaN(email)) {
            if (! checkPhoneValidation(email)) {
                error.push("* phone number is not valid !")
            }
        } else if (!checkEmailValidation(email)) {
            error.push("* email or phone number is not validate!")
        }

        if (fullName.length < 5 || fullName.length > 20) {
            error.push("*full name must be between 5 and 20 in length!")
        }

        if (username.length < 5 || username.length > 20) {
            error.push("*username must be between 5 and 20 in length!")
        }else{
            if(username.indexOf(' ') >= 0){
                error.push("*username must be white space free !!")
            }
        }

        if (password1 !== password2) {
            error.push("*password not matching !")
        } else {
            if (password1.length < 8 || password1.length > 30) {
                error.push("*password length should be <8 characters !")
            }
        }
        this.setState({error: error});
    }
    handleSignUp(){
        Alert.alert("ok");
        //this.setState({error:[]},()=>this.checkValidation());
        this.setState({error:[]},()=>{
            this.checkValidation();
            if(this.state.error.length<1){
                this.setState({"status":"Signing Up ..."});
            axios({
                method: 'post',
                url: 'http:// 192.168.100.88:8000/account/signUp',
                data: {email:this.state.email,username:this.state.username,fullName:this.state.fullName,password:this.state.password1}
            }).then((response) => {
                this.setState({"status":"Sign Up"});
                if(response.data.hasOwnProperty("error")){
                    this.setState({error:response.data.error})
                }else if(response.data.hasOwnProperty("email")){
                   AsyncStorage.setItem("email", response.data.email);
                   this.props.navigation.navigate('AccountVerify')
                }
            });
        }
        });
    }

    render(){
        return(
              <View style={{flex:1,alignItems:'center',paddingTop:40}}>
                <View style={{flex:1,alignItems:'flex-start',width:'70%'}}>
                    <View style={{height:80,width:80,backgroundColor:'#22addc',borderRadius:80,justifyContent:"center",alignItems:'center'}}>
                    <Image
                    style={{width: 100, height: 100}}
                    source={require('./../assets/icons/logo.png')}
                    />
                    </View>
                    <Text style={{color:'black',fontSize:22,marginTop:20,marginBottom:15}}>Tasbiralaya</Text>
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%'}}
                        placeholder="Fullname"
                        placeholderTextColor='#22addc'
                        onChangeText={(fullName) => this.setState({fullName})}
                    />
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%',marginTop:15}}
                        placeholder="Username"
                        placeholderTextColor='#22addc'
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%',marginTop:15}}
                        placeholder="Email or Phone"
                        placeholderTextColor='#22addc'
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%',marginTop:15}}
                        placeholder="Password"
                        placeholderTextColor='#22addc'
                        onChangeText={(password1) => this.setState({password1})}
                    />
                    <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%',marginTop:15}}
                        placeholder="Password"
                        placeholderTextColor='#22addc'
                        onChangeText={(password2) => this.setState({password2})}
                    />
                    <TouchableHighlight onPress={this.login} style={{alignItems:'center',width:'60%',paddingTop:10,paddingBottom:10,marginTop:30,borderRadius:25,backgroundColor:'#22addc'}}>
                        <Text onPress={this.handleSignUp}  style={{color:'white'}}>SignUup</Text>
                    </TouchableHighlight>
                    <View style={{marginTop:20,flexDirection:'row'}}>
                        <Text style={{color:'red'}}> {this.state.error.map((item)=>{
                            return <Text>{item}</Text>
                        })}</Text>
                    </View>
                    <View style={{marginTop:20,flexDirection:'row'}}>
                        <Text>have an account ? </Text>
                        <Text onPress={()=>this.props.navigation.navigate('Login')} style={{color:'black'}}>login</Text>
                    </View>
                </View>
            </View>
        )
    }
}