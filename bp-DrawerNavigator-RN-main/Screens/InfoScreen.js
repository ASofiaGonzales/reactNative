import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class InfoScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
            <Image resizeMode="contain" style={styles.formatoImagen} source={require('../img/instrucciones.gif')}/>
               <Text style={{color: '#FFE81F', fontSize: 20, textAlign: 'center'}}>El juego conciste en ingresar un número, el mismo le pertenece a un ID de un personaje de Star Wars. </Text>
                <Text style={{color: '#FFE81F', fontSize: 20, margin: 5, textAlign: 'center'}}>¿Podras adivinarlos? </Text>
                <Text style={{color: '#FFE81F', fontSize: 20, margin: 5, textAlign: 'center'}}>¡Que la fuerza te acompañe! </Text>
                <StatusBar style="auto" />
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });