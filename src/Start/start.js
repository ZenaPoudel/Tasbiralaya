import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight, ViewPagerAndroid} from 'react-native';
import Home from './src/home/home';
export default class Start extends Component{
    render(){
        return(
            <ViewPagerAndroid
              style={{flex:1}}
              initialPage={0}>
                          <View key='1' behavior='padding' style={{flex:1,alignItems:'center',paddingTop:40, backgroundColor:'#DCDCDC' }}>
                <View style={{flex:1,alignItems:'flex-start',width:'70%'}}>
                    <View style={{height:250,width:250,justifyContent:"center",alignItems:'center'}}>
                    <Image
                    style={{width: 230, height: 230}}
                    source={require('./../assets/icons/camera.png')}
                    />
                    </View>
                    <View style={{height:150, width:230, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'black',fontSize:22,marginTop:20,marginBottom:20, justifyContent:'center' }}>Post your photos</Text>
                    <Text>Post the photo you like and share it to the world!</Text>
                    </View>
                    <View style={{height:15, width:80, justifyContent:'center' , alignItems:'center', marginLeft:50, marginTop:30, marginBottom:0}}>
                   <ScrollView horizontal='true'>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'#22addc', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    </ScrollView>
    </View>
                    
                </View>
            </View>

          
            <View key='2' behavior='padding' style={{flex:1,alignItems:'center',paddingTop:40, backgroundColor:'#DCDCDC' }}>
                <View style={{flex:1,alignItems:'flex-start',width:'70%'}}>
                    <View style={{height:250,width:250,justifyContent:"center",alignItems:'center'}}>
                    <Image
                    style={{width: 230, height: 230}}
                    source={require('./../assets/icons/Search.png')}
                    />
                    </View>
                    <View style={{height:150, width:230, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'black',fontSize:22,marginTop:20,marginBottom:20, justifyContent:'center' }}>Follow your Idol</Text>
                    <Text>Follow you idol and friends. And get updated about them.</Text>
                    </View>
                    <View style={{height:15, width:80, justifyContent:'center' , alignItems:'center', marginLeft:50, marginTop:30, marginBottom:0}}>
                   <ScrollView horizontal='true'>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'#22addc', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    </ScrollView>
    </View> 
    </View>
   </View>
            <View key='3' behavior='padding' style={{flex:1,alignItems:'center',paddingTop:40, backgroundColor:'#DCDCDC' }}>
                <View style={{flex:1,alignItems:'flex-start',width:'70%'}}>
                    <View style={{height:250,width:250,justifyContent:"center",alignItems:'center'}}>
                    <Image
                    style={{width: 230, height: 230}}
                    source={require('./../assets/icons/Trending.png')}
                    />
                    </View>
                    <View style={{height:150, width:230, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'black',fontSize:22,marginTop:20,marginBottom:20, justifyContent:'center' }}>Change to business account</Text>
                    <Text>Change your profile to the business account and become an influencer!</Text>
                   </View>
                   <View style={{height:15, width:80, justifyContent:'center' , alignItems:'center', marginLeft:50, marginTop:30, marginBottom:0}}>
                   <ScrollView horizontal='true'>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'white', marginLeft:10}}>
    </View>
    <View style={{height:10, width:10, borderRadius:10, backgroundColor:'#22addc', marginLeft:10}}>
    </View>
    </ScrollView>
    </View>
                   <View style={{height:100, width:230, justifyContent:'center', alignItems:'center'}}>
                    <TouchableHighlight onPress={()=><Home/>} style={{alignItems:'center',width:'100%',paddingTop:10,paddingBottom:10,marginTop:20,borderRadius:25,backgroundColor:'#22addc'}}>
                        <Text style={{color:'white'}}>Get Started</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </View>
            </ViewPagerAndroid>
        )
    }
}
