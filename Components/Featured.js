import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FeaturedImages from './FeaturedImages';

const onPress = () => {
  console.log('See all pressed', 'See next page');
  Alert.alert('See all pressed', 'See next page');
};

const Featured = () => {
  return (
    <>
      <View>
        <Image
          source={require('../assets/bluephoto.png')}
          style={{height: 180}}
        />
        <Text
          style={{
            position: 'absolute',
            fontSize: 25,
            color: 'white',
            padding: 5,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Featured{' '}
        </Text>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            padding: 8,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              {' '}
              See all{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image
              style={{height: 28, width: 20}}
              source={require('../assets/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <FeaturedImages />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Featured;
