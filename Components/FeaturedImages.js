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

const onGetOfferPress = () => {
  Alert.alert('Get Offer pressed', 'Get Offer');
};

const FeaturedImages = () => {
  return (
    <>
      <View style={{position: 'absolute', paddingTop: 40, paddingLeft: 25}}>
        {/* <Text>Hi from Featured Images</Text> */}
        <Image
          style={{height: 125, width: 370, borderRadius: 30}}
          source={require('../assets/purple.png')}
        />
        <View style={{position: 'absolute', paddingTop: 45, paddingLeft: 50}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Epoxy
          </Text>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Waterproofing
          </Text>
          <Text style={{color: 'white'}}>Colortek</Text>
          <Text style={{color: 'white', paddingTop: 15}}>
            Packages available
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            paddingTop: 55,
            paddingRight: 20,
          }}>
          <TouchableOpacity onPress={onGetOfferPress}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              Get Offer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default FeaturedImages;
