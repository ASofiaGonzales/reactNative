import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


const axios = require('axios');

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "Value",
      done: false,
      personaje: []
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handlerbtn(){
            var id = this.state.value;
            axios.get("https://swapi.py4e.com/api/people/" + id)
            .then(personaje => {
              if (personaje.data != false) { 
                this.setState({
                 
                  done:true,
                  personaje: personaje.data
                })
                console.log(this.state);
                console.log(this.state.personaje.name);
              }
            })
            .catch(error => {
              console.log(error);
            });
            console.log("Me Clickearon");  
          
  }

  updateInputValue(evt) {

    this.setState ({id: evt.target.value});

}
  handlerTxt(text){
    var id = text;
    this.setState({ value: id });
    console.log ("Escribieron " + text);
           }

    render(){

      if(this.state.done !== true){
        return (

          <View style={styles.container}>
          <Image resizeMode="contain" style={styles.formatoImagen} source={require('./logo.gif')}/>
          <Text style={styles.texto}>Ingrese un número y adivine el personaje de StarWars </Text>
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: '#FFFCE2'
            }}
            placeholder='Ingrese un número'
            onChangeText={this.handlerTxt.bind(this)}
          />
          <Button
            title="Adivinar"
            color="#78002e"
            onPress={this.handlerbtn.bind(this)}
          />
        </View>
      )
      } else {
        return (
          <View style={styles.container}>
          <Image resizeMode="contain" style={styles.formatoImagen} source={require('./logo2.gif')}/>
          <Text style={styles.texto}>¿Quéres volver a intentarlo? </Text>
            <Text style={styles.texto}>Ingrese un número y adivine el personaje de StarWars </Text>
            <TextInput
              style={{
                height: 40,
                width: 250,
                borderColor: 'white',
                borderWidth: 1,
                color: '#FFFCE2',
                marginBottom: 10,
              }}
              placeholder='Ingrese un número'
              onChangeText={this.handlerTxt.bind(this)}
            />
            <Button title="Adivinar" color="#78002e"  onChange={ this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='codigo de personaje' />
            
            <Text style={{color: '#FFE81F', fontSize: 20, margin: 5}}>El personaje es: {this.state.personaje.name} </Text>
            <Text style={{color: '#FFE81F', fontSize: 20, margin: 5}}>Su género es: {this.state.personaje.gender} </Text>
            <Text style={{color: '#FFE81F', fontSize: 20, margin: 5}}>Mide: {this.state.personaje.height} cms</Text>
            <Text style={{color: '#FFE81F', fontSize: 20, margin: 5}}>Pesa: {this.state.personaje.mass} kgs</Text>
                   
          </View>
        );
      }
  }
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texto: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#FFE81F',
    marginTop: 50,
    
  },
  formatoImagen: {

    flex: 0.3,
  },
  container2: {
    flex: 1,
    backgroundColor: '#ad1457',
    alignItems: 'center',
    justifyContent: 'center',
  }

});