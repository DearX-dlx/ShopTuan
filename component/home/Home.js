/**
 * Created by dearx on 16/7/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
//首页详情页面
var HomeDetail = require('./HomeDetail');
//菜单栏
var HomeMenu = require('./HomeMenu');
//中间的菜单栏
var HomeMiddleView = require('./HomeMiddleView');
//下面的菜单栏目
var HomeBottomMenu = require('./HomeBottomMenu');
//购物中心
var HomeShopCenter = require('./HomeShopCenter');
//购物中心详情页面
var HomeShopCenterDetail = require('./HomeShopCenterDetail');

var Home = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {/* 首页的导航栏*/}
                {this.renderNavbar()}
                {/* 首页的菜单栏*/}
                <ScrollView>
                    {/*菜单栏目*/}
                    <View>
                        <HomeMenu/>
                    </View>
                    {/*中间菜单栏*/}
                    <View>
                        <HomeMiddleView/>
                    </View>
                    {/*下方的菜单栏*/}
                    <View>
                        <HomeBottomMenu/>
                    </View>
                    {/*购物中心*/}
                    <View>
                        <HomeShopCenter
                            leftImage='gw'
                            leftTitle='购物中心'
                            rightTitle='全部四家'
                        />
                        <HomeShopCenterDetail/>
                    </View>
                </ScrollView>
            </View>
        );
    },

    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,
            title:'首页详情',
        });
    },

    renderNavbar(){
        return(
            <View style={styles.navbarStyle}>
                <TouchableOpacity>
                    <Text style={styles.navAddressStyle}>深圳</Text>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <TextInput
                        style={styles.navSearchInputStyle}
                        placeholder="输入商家、品类、商圈"
                    />
                </View>
                <TouchableOpacity>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navbarImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navbarImage} />
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
        backgroundColor:'rgba(232,58,6,1)',
        height:Platform.OS == 'ios' ? 64 : 44,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:Platform.OS == 'ios' ? 10 : 0,
    },
    navAddressStyle:{
        color:'white',
        fontSize:15,
        marginLeft:5,
    },
    navSearchInputStyle:{
        height:30,
        backgroundColor:'white',
        borderRadius:12,
        marginLeft:10,
        marginRight:10,
        fontSize:14,
        paddingLeft:10,
    },
    navbarImage:{
        width:24,
        height:24,
        marginRight:5,
    },
});

module.exports = Home;