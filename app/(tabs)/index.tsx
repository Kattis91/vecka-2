import { Image, StyleSheet, Platform, Text, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import FancyBox from '@/components/FancyBox';

export default function HomeScreen() {

  const [fruit, setFruit] = useState("Banan");

  const [counter, setCounter] = useState(0);


  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>

      <View style={{ backgroundColor: "pink", flex: 1 }}>
        <Image source={require('../assets/images/bild.jpeg')} />
      </View>


      <View style={{ backgroundColor: "white", height: 150, flexDirection: "row" }}>
        <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>A</Text>
        </View>
        <View style={{ backgroundColor: "green", flex: 1, justifyContent: "center", alignItems: "center", margin: 5 }}>
          <Text>B</Text>
        </View>
        <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>C</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "yellow", height: 150, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>{ fruit }</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 85, color: "white" }}>{ counter }</Text>
        <FancyBox />
        <FancyBox />
        <FancyBox />
        <FancyBox />
      </View>

      <View style={{ backgroundColor: "red", height: 80, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        
        <View style={{ backgroundColor: "yellow", borderRadius: 5, marginRight: 15 }}>
          <Button title="Tryck här" onPress={() => {
            console.log("Nu har vi tryckt på knappen");
            if (fruit=="Banan") {
              setFruit ("Apelsin");
            } else if (fruit=="Apelsin") {
              setFruit("Kiwi");
            } else {
              setFruit("Banan")
            }
            setCounter(counter + 1);
          }} />
        </View>
        
        <View style={{ backgroundColor: "#f194ff", borderRadius: 5 }}>
          <Button title="Återställ" onPress={() => {
            setCounter(0);
            setFruit("Fruktsallad");
          }} />
        </View>

      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
