import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function Panel(props) {

    const [choroby,setChoroby] = useState([
        'autyzmem',
        'alalią',
        'jąkaniem',
        'wszelkim niedorozwojem mowy',
      ])

  return (
    <>
    <View style={styles.container}>
      <View style={styles.panel}>

            {props.content.info && <Image
                 style={styles.infoBig}
                 source={require('./../assets/infoBig.png')} 
            />}


          <Text style={styles.normal}>
            {props.content.id == 1 && <Text style={styles.welcome}>Witaj.{"\n\n"}</Text>}
            <Text>{props.content.text}</Text>
          </Text>
          {props.content.id == 1 && <FlatList 
            data={choroby}
            renderItem={({item}) => (
              <>
                <View style={styles.listItem}> 
                <Image
                  style={styles.info}
                  source={require('./../assets/info.png')} 
                  
                  />
                  <Text style={styles.important}>
                {item}
              </Text>
                </View>
              </>
            )}
            style={styles.list}
          />}
      </View>
     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(196, 255, 249)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    backgroundColor: 'white',
    margin: 20,
    fontSize: 18,
    borderRadius: 5,
    height: '90%',
    marginTop: 80,
  },
  important: {
    fontWeight: 'bold',
  },
  list: {
    paddingTop: '100px',
    display: 'block'
  },
  listItem: {
    // paddingTop: 10,
    // paddingBottom: 10,
    backgroundColor: '#EFFFF9',
    borderRadius: 5,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  normal: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
    padding: 35
  },
  info: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 20
  },
  next: {

  },
  welcome: {
  },
  infoBig: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 75
  }

});
