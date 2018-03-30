import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Tab1, Tab2, Tab3 } from './Tabs';
import Home from './Home';
import AnotherScreen from './AnotherScreen';


const StackComponent = StackNavigator( {
  tab: { screen: Tab1},
  anotherScreen: { screen: AnotherScreen}
},  {
  mode: 'modal',
  headerMode: 'none'
} );

const TabComponent = TabNavigator({
  tab1: { screen: StackComponent },
  tab2: { screen: Tab2 },
  tab3: { screen: Tab3 }
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  animationEnabled: true,
  tabBarOptions: {
    showIcon: false,
    activeTintColor: '#e91e63',
    inactiveTintColor: '#e6e6e6',
    indicatorStyle: {
      backgroundColor: null
    },
    style: {
      backgroundColor: "white"
    }
  }
});

const RootStack = StackNavigator({
    mainScreen: { screen: Home },
    tabs: { screen: TabComponent }
});

export const Root = () => {
  return (
    <RootStack />
  );
}
