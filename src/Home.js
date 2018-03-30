import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Home extends Component {

  render(){
    console.log(this.props.navigation);
    return(
      <View style = { styles.container }>
        <Text>Hello ! This is Home</Text>
        <Button
          onPress = {()=> this.props.navigation.navigate('tabs')}
          title = 'Go to Tabs'/>
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
