/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//程序主入口
var Main = require('./component/main/Main');

var ShopDemo = React.createClass({
      render() {
        return (
            <Main/>
        );
      },
    }
);


AppRegistry.registerComponent('ShopDemo', () => ShopDemo);