import Constants from 'expo-constants';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Details() {
  const navigation = useNavigation();

  const params = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
     <View>
        <Text>Detalhes do id: {params.id} </Text>
     </View>
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
