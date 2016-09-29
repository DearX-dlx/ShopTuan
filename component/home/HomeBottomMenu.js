/**
 * Created by dearx on 16/9/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

//导入视图组件
var MenuCommentItem = require('./MenuCommenItem');
//导入视图数据
var TopData = require('../../LocalData/HomeTopMiddle.json');
var TopDataDetail = TopData.data;
var BottomData = require('../../LocalData/XMG_Home_D4.json');

var HomeBottomMenu = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottoView()}
            </View>
        );
    },

    //渲染上部分
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <View>
                    <Text style={{fontSize:16,color:'orange',marginBottom:5}}>最高立减25</Text>
                    <Text style={{fontSize:14,color:'gray'}}>报名小码哥 新学员专享</Text>
                </View>
                <Image style={{width:155,height:63.5}} source={{uri:'nsj'}}></Image>
            </View>
        );
    },

    //渲染下部分
    renderBottoView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderItem()}
            </View>
        );
    },

    renderItem(){
        var viewArr = [];
        var dataArray = BottomData.data;
        for (var i = 0;i<dataArray.length;i++){
            viewArr.push(
                <MenuCommentItem
                    key={i}
                    title='hahah'
                    subTitle='hahahha'
                    rightImage='yyms'
                    titleColor='orange'
                />
            );
        }
        return viewArr;
    },
});

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:10,
        borderWidth:0.5,
        borderColor:'lightgrey',
    },
    topViewStyle:{
        width:screenWidth,
        height:70,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    bottomViewStyle:{
        width:screenHeight,
        flexDirection:'row',
        flexWrap:'nowrap',
    },
});

module.exports = HomeBottomMenu;