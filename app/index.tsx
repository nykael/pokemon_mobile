import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const navigation = useRouter();
  
  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    navigation.navigate(`details/${data.id}`)
    console.log(data)
  };

  return (
      <WebView 
        onMessage={handleMessage}
        style={styles.titleContainer}
        source={{uri: 'http://192.168.5.106:3000/'}}
      />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
  },
});
