import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FormComp from './components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <FormComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    paddingHorizontal:20
  },
});
