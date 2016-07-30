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
} from 'react-native';

var MineCelll = React.createClass({

    getDefaultProps(){
        return {
            imageURl:'',
            title:'',
            detail:'',
            onPress:() => {},
            detailImg:null,
        };
    },

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Image source={{uri:this.props.imageURl}} style={styles.imageStyle} />
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <View style={styles.distanceArea}></View>
                    {this.renderDetailImage()}
                    <Text style={styles.detailStyle}>{this.props.detail}</Text>
                    <Image style={styles.rightImgStyle} source={{uri:'icon_cell_rightArrow'}} />
                </View>
            </TouchableOpacity>
        );
    },

    renderDetailImage(){
       if (this.props.detailImg){
           return(
               <Image source={{uri:this.props.detailImg}} style={{width:24,height:13}} />
           );
       }else {
           return;
       }
    },
});

var styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        backgroundColor:'white',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
    },
    imageStyle:{
        width:24,
        height:24,
        marginLeft:10,
        borderRadius:12,
    },
    titleStyle:{
        marginLeft:10,
    },
    detailStyle:{
        marginRight:10,
        color:'#c0c0c0',
        fontSize:13,
    },
    rightImgStyle:{
        width:8,
        height:13,
        marginRight:10,
    },
    distanceArea:{
        flex:1
    },
});

module.exports = MineCelll;
