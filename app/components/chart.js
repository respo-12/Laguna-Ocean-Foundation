import { LineChart } from "react-native-chart-kit"
import {StyleSheet,Dimensions,View,Text, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useEffect, useState } from "react";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function chart(){
    const tides = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=9410580&product=predictions&datum=MLLW&time_zone=lst&units=english&application=DataAPI_Sample&format=json&interval=hilo"
    const [levels,setLevels] = useState([0,0])
    const [dates,setDates] = useState([])
    const [day,setDay] =useState("")

    
    useEffect(() => {
        const fetcher = async () =>{
            await fetch(tides).then(
                (response) => {
                    response.json().then((json) =>{
                        setLevels(json.predictions.map(x=>parseFloat(x.v)))
                        setDates(json.predictions.map(x=>x.t.slice(11,17)))
                        setDay(json.predictions[0].t.slice(0,10))                  
                      })
                })
        }
        fetcher()
    },[tides])

    return(
      <View style ={styles.window}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'white', fontSize:20,fontWeight:'bold'}}>Tide Chart </Text>
            <Link href="/guidebook/tidecharts" style={{alignSelf:'flex-end'}} asChild>
              <Pressable>
                <AntDesign name="questioncircleo" size={30} color="white" />
              </Pressable>
            </Link>
          </View>
          <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: levels,
              color: (opacity = 1) => `rgba(58, 137, 157, ${opacity})`,
            }
          ]
        }}
        width={Dimensions.get("window").width*.8} // from react-native
        height={Dimensions.get("window").height*.32}
        yAxisLabel=""
        yAxisSuffix="ft"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: blue,
          backgroundGradientFrom: blue,
          backgroundGradientTo:blue,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          fillShadowGradientTo:"rgba(25,81,106,1)",
          fillShadowGradientFrom:sand,
          fillShadowGradientOpacity: 1,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "rgba(25,81,106,1)"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          shadowColor:'black',
          shadowRadius:8
        }}
      />
  </View>
    )

}

const styles = StyleSheet.create({
  
  window:{
    justifyContent:'center',
    position: 'absolute',
    height:'35vh',
    width: '80vw',
    top: '50vh',
    marginHorizontal: '10vw'
}
})