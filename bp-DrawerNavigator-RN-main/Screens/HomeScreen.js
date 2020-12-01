import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class HomeScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
            <Text style={{color: '#FFE81F', fontSize: 30, textAlign: 'center'}}> Bienvenidos/as</Text>
            <Image resizeMode="contain" style={styles.formatoImagen} source={require('../img/home.gif')}/>
                
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