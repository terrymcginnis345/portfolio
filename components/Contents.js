import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { Audio } from 'expo-av';

export default function Contents(props) {

    
  const [sound, setSound] = useState();

  async function showSound(item) {
    props.setSite(5)
    props.setSound(item.itemNumber)
  }
    
  return (
    <>
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.contents}>Spis treści:{'\n'}</Text>
      <FlatList 
            data={props.content.contents}
            renderItem={({item}) => (
              <>
                    <TouchableOpacity onPress={() => showSound(item)}>
                    <View>
                        <Text style={styles.number}>({item.itemNumber})</Text>
                        <Text style={styles.link}>{item.title}</Text>
                        <Image source={require('./../assets/sound.png')} style={styles.sound} />
                    </View>
                    </TouchableOpacity>
              </>
            )}
            style={styles.list}
            />
            
            </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  panel: {
    backgroundColor: 'white',
    margin: 20,
    fontSize: 18,
    borderRadius: 5,
    height: '90%',
    marginTop: 80,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20,
    flex: 1,
  },
  link: {
    fontSize: 20,
    padding: 5,
    paddingLeft: 0,
    textDecorationLine: 'underline',
    marginBottom: 30,
    fontWeight: 'bold',

  },
  number: {

  },
  contents: {
    fontSize: 30,
    paddingRight: 0,
  },
  sound: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    marginTop: 10
  }
});
