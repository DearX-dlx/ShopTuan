/**
 * Created by dearx on 16/7/30.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

var MineHeader = React.createClass({

    getDefaultProps(){
        return{
            headerImg:'xzh',
            name:'选之花',
        };
    },

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.mineMessageStyle}>
                    <Image source={{uri:this.props.headerImg}} style={styles.headerImgStyle} />
                    <Text style={styles.nameStyle}>{this.props.name}</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}} />
                    <View style={{flex:1}}></View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImgStyle} />
                </View>
                <View style={styles.mineDetailStyle}>
                    {this.renderLRItem("100","优惠券")}
                    {this.renderLine()}
                    {this.renderLRItem("20","评价")}
                    {this.renderLine()}
                    {this.renderLRItem("51","收藏")}
                </View>
            </View>
        );
    },

    renderLRItem(number,name){
        return(
            <View style={styles.detailItemStyle}>
                <Text style={styles.detailItemTextStyle}>{number}</Text>
                <Text style={styles.detailItemTextStyle}>{name}</Text>
            </View>
        );
    },

    renderLine(){
        return(
            <View style={styles.mineDetailLineStyle}></View>
        );
    },

});
var styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(232,58,6,1)",
        height:Platform.OS == 'ios' ? 150 : 130,
    },
    mineMessageStyle:{
        flexDirection:'row',
        height:80,
        //backgroundColor:'blue',
        marginTop:Platform.OS =='ios' ? 30 : 10,
        alignItems:'center',
    },
    mineDetailStyle:{
        flexDirection:'row',
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent:'space-around',
    },
    headerImgStyle:{
        height:60,
        width:60,
        borderRadius:30,
        margin:10,
    },
    nameStyle:{
        fontSize:18,
        color:'white'
    },
    rightImgStyle:{
        width:8,
        height:13,
        marginRight:10,
    },
    detailItemStyle:{
        justifyContent:'center',
        alignItems:'center',
    },
    detailItemTextStyle:{
        fontSize:12,
        color:'white',
        margin:2,
    },
    mineDetailLineStyle:{
        backgroundColor:'white',
        width:1,
        marginTop:5,
        marginBottom:5,
    },
});

module.exports = MineHeader;