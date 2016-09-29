/**
 * Created by dearx on 16/9/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

//引入数据
var Data = require('../../LocalData/XMG_Home_D5.json');

var HomeShopCenterDetail = React.createClass({

    getInitialState(){
        return{
            jumpViewURL:null,
        };
    },

    render() {
        return (
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this.renderItem()}
            </ScrollView>
        );
    },

    renderItem(){
        var viewArr = [];
        var dataArr = Data.data;
        for (var i = 0;i<dataArr.length;i++){
            let itemData = dataArr[i];
            viewArr.push(
                <TouchableOpacity key={i} onPress={() => {this.clickItem(itemData.detailurl)}}>
                    <View>
                        <Image style={styles.playImgStyle} source={{uri:itemData.img}}>
                            <Text style={styles.addTextStyle}>{itemData.showtext.text}</Text>
                        </Image>
                        <Text style={{fontSize:14,marginLeft:10}}>{itemData.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return viewArr;
    },

    clickItem(url){
        //alert(url)
        this.props.jumpViewURL(url);
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:120,
    },
    addTextStyle:{
        position:'absolute',
        left:0,
        bottom:10,
        color:'white',
        backgroundColor:'orange',
        fontSize:12,
    },
    playImgStyle:{
        width:103,
        height:75,
        borderRadius:5,
        margin:10,
    },
});

module.exports = HomeShopCenterDetail;