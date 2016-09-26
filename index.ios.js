/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//ES6的写法
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
    //用户渲染的方法
      render() {
        return (
            <Main />
        );
      },
    }
);

//表示运行那个程序
AppRegistry.registerComponent('ShopDemo', () => ShopDemo);
