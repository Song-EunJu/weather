import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
   Thunderstorm : { //천둥
    iconName: "weather-lightning-rainy",
    background:['#F3904F','#3B4371']
   },
   Drizzle : { 
    iconName: "weather-rainy",
    background:['#A7BFE8','#6190E8']
   }, //이슬비
   Rain : { 
    iconName:"weather-pouring",
    background:['#fffbd5','#b20a2c']
   }, //비
   Snow : { 
    iconName:"weather-snowy",
    background:['#355C7D','#6C5B7B','#5D26C1']
   }, //눈
   Clear : { 
    iconName:"weather-sunny",
    background:['#59C173','#a17fe0','#5D26C1']
   }, // 맑은
   Clouds : { 
    iconName:"weather-cloudy",
    background:['#dd3e54','#6be585']
   }, //구름낀
   Haze : { 
    iconName:"weather-hazy",
    background:['#bdc3c7','#2c3e50']
   }, //안개
   Mist : {
    iconName:"weather-hail",
    background:['#D3CBB8','#6D6027']
   }, //안개
   Dust : { 
    iconName:"weather-fog",
    background:['#DECBA4','#3E5151']
   }  //먼지
}

export default function Weather({temp, condition, desc, place}) {
    return (
      <LinearGradient colors={weatherOptions[condition].background} style={styles.container}>
      <View style={styles.container}>
          <View style={styles.info}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={110} color="white" />
            <Text style={styles.place}>{place}</Text>
            <Text style={styles.temp}>{temp}º</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        <StatusBar style="dark" />
      </View>   
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    info:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },

    detail:{
        flex:0.6,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    contain:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },

    place: {
      fontSize: 35,
      fontWeight: "bold",
      color: "white"
    },

    temp: {
      padding: 10,
      fontSize: 28,
      fontWeight: "bold",
      color: "white"
    },

    desc:{
      fontSize: 30,
      color: "white"
    }
});

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"  
    ]).isRequired,
    desc:PropTypes.string.isRequired,
    place:PropTypes.string.isRequired
}


