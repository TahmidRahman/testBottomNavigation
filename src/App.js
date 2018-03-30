import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Root } from './Root';


export default class App extends Component {
  render(){
    return(
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
