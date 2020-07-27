import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Services from './Components/Services';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Navbar />
        <Featured />
        <Services />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
