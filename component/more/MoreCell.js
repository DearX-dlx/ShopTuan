/**
 * Created by dearx on 16/7/30.
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
    Switch,
} from 'react-native';

var MoreCell = React.createClass({

    getDefaultProps(){
        return{
            title:'',
            onPress:() => {},
            isSwitch:false,
            isCatch:false,
        }
    },

    getInitialState(){
        return({
            switchValue: true
        });

    },

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Text style={styles.contentTitle}>{this.props.title}</Text>
                    {this.rendOther()}
                </View>
            </TouchableOpacity>
        );
    },

    rendOther(){
        if (this.props.isSwitch){
            return(
                <Switch value={this.state.switchValue}
                        onValueChange={() => {this.setState({switchValue:!this.state.switchValue})}} />
            );
        }
        else {
            if (this.props.isCatch){
                return(
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#c0c0c0',marginRight:5,fontSize:13}}>200.9M</Text>
                        <Image style={styles.contentImage} source={{uri:'icon_cell_rightArrow'}} />
                    </View>
                )
            }
            else {
                return(
                    <Image style={styles.contentImage} source={{uri:'icon_cell_rightArrow'}}/>
                )
            }

        }
    },
});

var styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    contentTitle:{
        marginLeft:10,
        fontSize:14,
        flex:1,
        textAlign:'left',
    },
    contentImage:{
        width:8,
        height:13,
        marginRight:10,
    },
});

module.exports = MoreCell;