import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import Panel from './components/Panel';
import FooterButtons from './components/FooterButtons';
import Contents from './components/Contents';
import Player from './components/Player';

export default function App() {

  const sites = {
    1: {
      id: 1,
      info: false,
      text: 'Ta aplikacja ma za zadanie pomóc wspierać ogólnorozwojową terapię dziecka w leczeniu chorób mowy u dzieci z:',
      disease: [
        'autyzmem',
        'alalią',
        'jąkaniem',
        'wszelkim niedorozwojem mowy'
      ]
    },
    2: {
      id: 2,
      info: true,
      text: 'Ćwiczenia zawarte w tej aplikacji pomogą w leczeniu zaburzeń percepcji słuchowej, poprzez odtwarzanie dźwięków i powtarzanie przez osobę mającą problemy z wymawianiem słów lub sylab.'
    },
    3: {
      id: 3,
      info: true,
      text: 'Nagrania przygotowane w profesjonalnym studiu zostały przetworzone elektronicznie by długość trwania spółgłosek była równa długości brzmienia samogłosek. Optymalnie zaleca się ćwiczyć dwa razy dziennie po dziesięć minut.'
    },
    4: {
      id: 4,
      info: false,
      contents: [
        {title: 'Wstęp', itemNumber: '1', file: require('./assets/sounds/1.mp3'), image: require('./assets/images/1.png')},
        {title: 'A O', itemNumber: '2', file: require('./assets/sounds/2.mp3'), image: require('./assets/images/2.png')},
        {title: 'I Y', itemNumber: '3', file: require('./assets/sounds/3.mp3'), image: require('./assets/images/3.png')},
        {title: 'III Yyy', itemNumber: '4', file: require('./assets/sounds/4.mp3'), image: require('./assets/images/4.png')},
        {title: 'Oj Ach', itemNumber: '5', file: require('./assets/sounds/5.mp3'), image: require('./assets/images/5.png')},
      ]
    },
    5: {
      id: 5,
      info: false,
    }
  }

  const [site, setSite] = useState(1);
  const [sound, setSound] = useState(sites[5].soundId);

  const styles = StyleSheet.create({
      buttonsWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(196, 255, 249)',
        alignItems: 'center'
      }
  })



  return (
      <>
      <View style={styles.buttonsWrapper}>
      
      {site == 1 && <Panel 
                      content={sites[1]}
                    />}

      {site == 2 && <Panel 
                      content={sites[2]} 
                    />}

      {site == 3 && <Panel 
                      content={sites[3]} 
                    />}

      {site == 4 && <Contents 
                      content={sites[4]}
                      setSite={setSite}
                      setSound={setSound} 
                    />}

      {site == 5 && <Player 
                      sound={sound}
                      content={sites[4].contents}
                    />}
      
      <FooterButtons 
        siteId={site}  
        setSite={setSite}
      />

      </View>
      </>
    
  )

  

  }
