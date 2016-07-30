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
    ScrollView,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
var Item = require('./MoreCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavbar()}
                <ScrollView>
                    <View style={{marginTop:10}}>
                        <Item title="扫一扫" onPress={() => {alert("扫一扫")}} />
                    </View>
                    <View style={{marginTop:10}}>
                        <Item title="省流量模式" isSwitch={true} onPress={() => {alert("扫一扫")}} />
                        <Item title="消息提醒" />
                        <Item title="邀请好友" />
                        <Item title="清空缓存" isCatch={true} />
                    </View>
                    <View style={{marginTop:10}}>
                        <Item title="意见反馈" />
                        <Item title="问卷调查" />
                        <Item title="支付帮助" />
                        <Item title="网络诊断" />
                        <Item title="关于我们" />
                        <Item title="人才招募" />
                        <Item title="问卷调查" />
                    </View>
                    <View style={{marginTop:10}}>
                        <Item title="精品推荐" />
                        <Item title="给我们打分" />
                    </View>
                </ScrollView>
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
        backgroundColor: '#e8e8e8',
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