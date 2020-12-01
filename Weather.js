import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
   Thunderstorm : { //천둥
    iconName: "weather-lightning-rainy"
   },
   Drizzle : { 
    iconName: "weather-rainy"
   }, //이슬비
   Rain : { 
    iconName:"weather-pouring"
   }, //비
   Snow : { 
    iconName:"weather-snowy"
   }, //눈
   Clear : { 
    iconName:"weather-sunny"
   }, // 맑은
   Clouds : { 
    iconName:"weather-cloudy"
   }, //구름낀
   Haze : { 
    iconName:"weather-hazy"
   }, //안개
   Mist : {
    iconName:"weather-hail"
   }, //안개
   Dust : { 
    iconName:"weather-fog"
   }  //먼지
}

export default function Weather({temp, condition, desc, place}) {
    return (
      <View style={styles.container}>
          <View style={styles.info}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="black" />
            <Text style={styles.place}>{place}</Text>
            <Text style={styles.temp}>{temp}º</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        <StatusBar style="light" />
      </View>   
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
        flex:1,
        alignItems: "flex-start",
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
    },

    temp: {
      padding: 10,
      fontSize: 28
    },

    desc:{
      fontSize: 40,
      alignItems: "flex-start"
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


