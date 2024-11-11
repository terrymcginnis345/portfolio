import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-web";
import { Audio } from "expo-av";
// import { Video } from 'react-native-media-kit';

export default function Player(props) {
  const [sound, setSound] = useState();

  async function play(item) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      props.content[parseInt(props.sound) - 1].file
    );

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.panel}>
          <View>
            <Image
              source={props.content[parseInt(props.sound) - 1].image}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.title}>
              {props.content[parseInt(props.sound) - 1].title}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => play(props.sound)}>
              <Image
                source={require("./../assets/images/play.png")}
                style={styles.play}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(196, 255, 249)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  panel: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    fontSize: 18,
    borderRadius: 5,
    height: "90%",
    marginTop: 80,

    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop:20,
    padding: 73,
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    // borderWidth: 3,
    // borderColor: 'black'
  },
  play: {
    width: 100,
    height: 100,
    // borderWidth: 3,
    // borderColor: 'black'
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    textDecorationLine: "underline",
  },
});
