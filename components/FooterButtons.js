import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function FooterButtons(props) {

    const styles = StyleSheet.create({
        buttons: {
            marginHorizontal: 5
          },
          buttonsWrapper: {
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'green',
            paddingVertical: 22,
            // backgroundColor: 'red',
            alignItems: 'flex-start'
          }
    })


  const [site, setSite] = useState(1);

  return (
      <>
        <View style={styles.buttonsWrapper}>

        {
            props.siteId <= 3 && (
            <View style={styles.buttons}>
                <Button 
                    title="Dalej"
                    style={styles.next}
                    onPress={() => {props.setSite(props.siteId + 1)}}
                />
            </View>
            )
        }

        {
            props.siteId <= 3 && (
            <View style={styles.buttons}>
                <Button 
                    title="Pomiń wstęp"
                    style={styles.next} 
                    onPress={() => {props.setSite(4)}}
                />
            </View>
            )
        }

        {
            props.siteId == 4 && (
            <View style={styles.buttons}>
                <Button 
                    title="Powróć do wstępu"
                    style={styles.next} 
                    onPress={() => {props.setSite(1)}}
                />
            </View>
            )
        }

        {
            props.siteId >= 5 && (
            <View style={styles.buttons}>
                <Button 
                    title="Spis treści"
                    style={styles.next} 
                    onPress={() => {props.setSite(4)}}
                />
            </View>
            )
        }

        </View> 
      </>
    
  )

  

  }
