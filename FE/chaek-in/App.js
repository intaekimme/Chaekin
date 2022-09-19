import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import LoginPage from './src/components/Pages/Login/LoginPage'
import TabNavigation from './src/navigation/TabNavigation'
import { NavigationContainer } from "@react-navigation/native";


export default function App () {
  return (
    // <View style={styles.container}>
    //   <LoginPage />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
