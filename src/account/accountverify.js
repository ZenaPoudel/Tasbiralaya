import React, {Component} from 'react';
import {View, Text, TextInput,AsyncStorage} from 'react-native';
import axios from "axios";
export class AccountVerify extends Component{
    constructor(){
        super();
        this.state = {
            code:'',
            error:'',
            success:false,
            status:'Submit',
            email:''
        };
        this.checkCode = this.checkCode.bind(this);
    }
    checkCode() {
        if(this.state.code.length===4 && !isNaN(this.state.code.length)){
            this.setState({status:'wait ...'});
            AsyncStorage.getItem("email").then((value) => {
                this.setState({"email": value});
            }).done();
            axios({
            method: 'post',
            url: 'http:// 192.168.100.88:8000/account/verifyAccount',
            data: {
                email:this.state.email,
                code:this.state.code
            }
        }).then((response) => {
            this.setState({status:'submit'});
              if(response.data.hasOwnProperty("success")){
                    this.setState({success:true})
                }else if(response.data.hasOwnProperty("fail")){
                    this.setState({error:'* code din not matched !!'});
                }
        });
        }else{
            this.setState({error:'please provide valid 4 digit code !!'})
        }
    }

    render(){
        if(this.state.success===true){
            return <View>
                Congratulations !! You are successfully signed up your account
                 <Text onPress={()=>this.props.navigation.navigate('Login')} style={{color:'black'}}>Go back to login</Text>
            </View>
        }
        return(
             <View>
                <TextInput
                        style={{height: 40,borderBottomColor:'#a0dff4',borderBottomWidth:1,width:'100%'}}
                        placeholder="Fullname"
                        placeholderTextColor='#22addc'
                        onChangeText={(code) => this.setState({code})}
                    />
                    <Text onPress={this.checkCode}>Submit</Text>
                 <Text>
                    {this.state.error}
                </Text>
            </View>
        )
    }
}