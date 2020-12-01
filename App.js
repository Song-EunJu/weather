import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import Loader from './Loader.js';
import Weather from './Weather.js';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY="bdc67a46e7bc48f0f9014d2fed2283d2";
export default class App extends React.Component {
  state = {
    isLoading : true
  };

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error){
      Alert.alert("Can't find you", "So sad");
    }
  }

  getWeather = async(lat, lon) => {
    const {
      data:{
        main:{temp},
        name,
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading:false, condition:weather[0].main, desc:weather[0].description, place:name, temp: temp});
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition, desc, place} = this.state;
    return (
      isLoading ? <Loader/> : <Weather temp={Math.round(temp)} condition={condition} desc={desc} place={place}/>
    );
  }
}

