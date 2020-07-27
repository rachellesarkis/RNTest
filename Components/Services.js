import React, {useState} from 'react';
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
  FlatList,
} from 'react-native';

const Services = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      source: require('../assets/image1.png'),
      title: 'Plumbing',
    },
    {
      id: 2,
      source: require('../assets/image2.png'),
      title: 'Electrical',
    },
    {
      id: 3,
      source: require('../assets/image3.png'),
      title: 'Painting',
    },
    {
      id: 4,
      source: require('../assets/image4.png'),
      title: 'Security Systems',
    },
    {
      id: 5,
      source: require('../assets/image5.png'),
      title: 'Landscaping',
    },
    {
      id: 6,
      source: require('../assets/image6.png'),
      title: 'Wallpapers',
    },
  ]);

  const numberOfColumns = 3;
  return (
    <>
      <View style={{backgroundColor: '#e3ecfa'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            paddingTop: 3,
            paddingLeft: 20,
            paddingBottom: 2,
          }}>
          Services
        </Text>
        <FlatList
          numColumns={numberOfColumns}
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Alert.alert(item.id.toString(), item.title)}
              style={styles.container}>
              <Image style={styles.image} source={item.source} />
              <Text style={styles.text}>{item.title} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};
// };

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginLeft: 30,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default Services;
