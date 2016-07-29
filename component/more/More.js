/**
 * Created by dearx on 16/7/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavbar()}
                <Text style={styles.welcome}>
                    Welcome to More!
                </Text>
            </View>
        );
    },

    renderNavbar(){
        return(
            <View style={styles.navbarStyle}>
                <View style={styles.distanceViewStyle}></View>
                <Text style={styles.navTitleStyle}>更多</Text>
                <TouchableOpacity>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
                </TouchableOpacity>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navbarStyle:{
        height:Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(232,58,6,1)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:Platform.OS == 'ios' ? 10 : 0,
    },
    navTitleStyle:{
        flex:1,
        color:'white',
        fontSize:18,
        textAlign:'center',
    },
    distanceViewStyle:{
        width:24,
        height:24,
    },
    navImageStyle:{
        width:24,
        height:24,
        marginRight:10,
        //position:'absolute',
        //right:10,
        //bottom:15,
    },
});

module.exports = More;