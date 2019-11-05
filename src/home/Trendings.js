import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, View, TouchableOpacity} from "react-native";
const deviceWidth = Dimensions.get('window').width/2-2;

export default class Trendings extends Component{
    
    render(){
        const navigate = this.props.navigation;
        return(
            <View>
                   <View style={{height:50,backgroundColor:'white',flexDirection:'row',justifyContent: 'space-between',alignItems:'center',elevation:3}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image
                            style={{width:30,height:30,marginLeft:10}}
                            source={require('./../assets/icons/Trending.png')}/>
                        <Text style={{marginLeft:10,fontSize:18,color:'black',fontWeight:'bold'}}>Trending</Text>
                    </View>
                    </View>
                <ScrollView>
                 
                    <View style={{marginTop:20,flexDirection:'row',flexWrap:'wrap',paddingBottom:80}}>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <TouchableOpacity onPress={() => navigate('Posts')} style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('./../assets/images/girl.jpg')} style={{height:deviceWidth,width:deviceWidth,marginTop:2,marginLeft:1,borderRadius:2}}> 
                        <View style={{height:deviceWidth, width:deviceWidth, flexDirection:'row', elevation:4, alignItems: 'center',paddingLeft:20}}>
                        <View style={{marginLeft:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Likes </Text>
                                <Text> 300</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16,}}>Comments </Text>
                                <Text> 80</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'black',fontWeight: 'bold',fontSize:16}}>Time </Text>
                                <Text> 5:55</Text>
                            </View>
                        </View>
                            </View>
                        </ImageBackground>

                    </View>
                </ScrollView>
            </View>
        )
    }
}