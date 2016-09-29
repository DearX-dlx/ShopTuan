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
    TouchableOpacity,
} from 'react-native';

var HomeShopCenter = React.createClass({

    getDefaultProps(){
        return{
            leftImage:'',
            leftTitle:'',
            rightTitle:'',
        };
    },

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image style={{width:22.5,height:22.5,marginLeft:10}} source={{uri:this.props.leftImage}}></Image>
                        <Text style={{fontSize:14,color:'black',marginLeft:5}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray',fontSize:13,marginRight:5}}>{this.props.rightTitle}</Text>
                        <Image style={{width:8, height:13,marginRight:10}}
                               source={{uri:'icon_cell_rightArrow'}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        height:45,
        marginTop:10,
        borderWidth:0.5,
        borderColor:'lightgrey',
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
});

module.exports = HomeShopCenter;