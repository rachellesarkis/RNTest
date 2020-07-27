import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

const Navbar = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.Container}>
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../assets/profile.png')}
          />
          <Image
            style={{height: 25, width: 80, marginTop: 5}}
            source={require('../assets/fixxilogo.png')}
          />
          <Image
            style={{height: 36, width: 36, marginRight: 20, marginTop: 2}}
            source={require('../assets/questionmark.png')}
          />
        </View>
        <TextInput
          placeholder="What would you like to do?"
          placeholderTextColor="grey"
          style={{
            backgroundColor: '#dde6ed',
            marginTop: 10,
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 50,
            fontSize: 16,
            paddingLeft: 20,
            fontWeight: 'bold',
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17,
  },
});

export default Navbar;
