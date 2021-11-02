import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
const App = () =>{
  return <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image style={styles.imgsize} source={{uri:'https://i.pinimg.com/736x/e1/be/d7/e1bed7ca54e89b5af9afb815b7f1bdba.jpg'}}/>
      <Button 
        title='Dale Click'
        color='#DC143C'
        onPress={ () => console.log('Hello World')}
      />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#292929"},
  title: {
    fontSize: 30,
    color: "#ffffff",
    marginBottom: 18},
  imgsize: {
    height: 200,
    width:200,
    borderRadius: 100,
    marginBottom: 18}
})


export default App;

