import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log(data)
  };



  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
      <WebView 
      onMessage={handleMessage}
       style={styles.titleContainer}
        source={{uri: 'http://10.10.149.99:3000'}}
      />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
