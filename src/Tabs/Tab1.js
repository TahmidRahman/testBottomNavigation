import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Tab1 extends Component {
  static navigationOptions = {
   tabBarLabel: 'Tab 1',
   tabBarIcon: null,
 };

  render(){
    console.log(this.props.navigation);
    return(
      <View style = { styles.container }>
        <Text>Hello from Tab1!!</Text>
        <Button
          onPress = {()=> this.props.navigation.navigate('anotherScreen')}
          title = 'Go to Another Screen'/>
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

export { Tab1 };
