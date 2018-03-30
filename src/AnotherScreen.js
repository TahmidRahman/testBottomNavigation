import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AnotherScreen extends Component {
  static navigationOptions = {
    title: 'Another Screen',
    tabBarLabel: 'Tab 1',
    tabBarIcon: null,
  }


  render(){
    return(
      <View style = { styles.container }>
        <Text>This is Another Screen!!</Text>
      </View>
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
