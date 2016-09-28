/**
 * Created by dearx on 16/9/27.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
//页面数据
var MiddleMenuData = require('../../LocalData/HomeTopMiddleLeft.json');
//公用cell
var MenuCommentItem = require('./MenuCommenItem');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边视图*/}
                {this.renderLeftView()}
                {/*右边视图*/}
                <View style={{flexDirection:'column'}}>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    //左边的视图
    renderLeftView(){
        var leftData = MiddleMenuData.dataLeft[0];
        return(
            <TouchableOpacity onPress={() => {alert('0')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:leftData.img1}} style={{width:78,height:25,marginBottom:5}} />
                    <Image source={{uri:leftData.img2}} style={{width:64,height:43.5,marginBottom:5}} />
                    <Text style={{fontSize:15, color:'gray',marginBottom:5}}>{leftData.title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:12,color:'#24B59F'}}>{leftData.price}</Text>
                        <Text style={{fontSize:14,color:'orange',backgroundColor:'yellow'}}>{leftData.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    },

    //右边的视图
    renderRightView(){
        var rightData = MiddleMenuData.dataRight;
        var viewArr = [];
        for (var i = 0;i<rightData.length;i++) {
            viewArr.push(
                <MenuCommentItem
                    key={i}
                    title={rightData[i].title}
                    subTitle={rightData[i].subTitle}
                    rightImage={rightData[i].rightImage}
                    titleColor={rightData[i].titleColor}
                />
            );
        }
        return viewArr;
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'row',
        height:140,
    },
    leftViewStyle:{
        // backgroundColor: 'yellow',
        width:screenWidth / 2,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderWidth:0.5,
        borderColor:'lightgrey',
    },
});

module.exports = HomeMiddleView;