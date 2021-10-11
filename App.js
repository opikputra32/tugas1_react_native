/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Import Component
import React, {Component} from 'react';
import type {Node} from 'react';

//Import React Native
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Import Component
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/MenuGame';
import MenuBerita from './Component/MenuBerita';
import MenuHits from './Component/MenuHits';

const Footer = () => {
  return(
    <View>
      <Text>Footer @Niomic</Text>
    </View>
  );
}

const Header = () => {
  return(
    <View>
      <Text>Halaman Header</Text>
    </View>
  );
}

class App extends Component {
  render(){
    return(
      <View>
        <Header/>
        <MenuUtama/>
        <MenuGame/>
        <MenuBerita/>
        <MenuHits/>
        <Footer/>
      </View>
    );
  }
}


export default App;
