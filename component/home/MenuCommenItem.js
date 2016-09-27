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
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

var MenuCommentItem = React.createClass({

    getDefaultProps(){
        return {
            title:'',
            subTitle:'',
            rightImage:'',
            titleColor:'',
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:16,color:this.props.titleColor,marginBottom:5}}>{this.props.title}</Text>
                    <Text style={{fontSize:12,color:'gray'}}>{this.props.subTitle}</Text>
                </View>
                <Image style={{width:58.5,height:42.5}} source={{url:this.props.rightImage}} />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width:screenWidth / 2,
        borderWidth:0.5,
        borderColor:'lightgrey',
    },
});

module.exports = MenuCommentItem;