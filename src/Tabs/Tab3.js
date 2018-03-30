import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Tab3 extends Component {
  static navigationOptions = {
   tabBarLabel: 'Tab 3',
   tabBarIcon: null,
 };

  render(){
    return(
      <View style = { styles.container }>
        <Text>Hello from Tab3!!</Text>
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

export { Tab3 };
