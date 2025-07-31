import React from 'react';
import { View, Text, StyleSheet,Button,Pressable} from 'react-native';
import {theme} from '../theme'

export default function App() {
  return (
  <View style = {styles.container}>
    <View style = {styles.header}>
      <Text style = {styles.title}> GeoStride</Text>
    </View>
    <View style = {styles.card}>
    <View style = {styles.trailInfo}>
      <Text style ={styles.icon}></Text>
      <Text style = {styles.distance}>3.25</Text>
      <Text style = {styles.unit}>8.2 miles</Text>
    </View>
    <Text style = {styles.trailName}>Green Hill Top </Text>
    <View style={styles.buttons}>
          <Button title="Start Activity" onPress={() => {}} />
          <Button title="Plan Route" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nearby Trails</Text>
        <View style={styles.trailItem}>
          <Text>Sunset Trail</Text>
          <Text>5.7 mi</Text>
          <Text>Moderate</Text>
        </View>
        <View style={styles.trailItem}>
          <Text>Eagle Peak</Text>
          <Text>10.5 mi</Text>
          <Text>Hard</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photo Memories</Text>
        <Button title="Add a photo" onPress={() => {}} />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header:{
    alignItems:'center',
    marginBottom: 10
  },
  title:{
   fontSize : 24,
   fontWeight: 'bold',
   color: theme.colorgreen
  },
  card:{
    backgroundColor:'#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom:10,
    elevation:2,
  },
  trailInfo:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:5

  },
  icon:{
   fontSize:20,
   color: '#000',
  marginRight:5,
  },
  distance:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4A3D',
  },
  unit:{
    fontSize:18,
    color:'#2E4A3D'
  },
  trailName:{

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E4A3D',
    marginBottom: 10,
  },
  trailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  }

});
