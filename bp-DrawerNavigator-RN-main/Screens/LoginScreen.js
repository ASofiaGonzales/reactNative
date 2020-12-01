import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';

export class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "201353263162-l5iq3bneoicn7v2gtfmpb2f6fuip706a.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../img/logueo.gif')} style={{flex: 0.2}} resizeMode='contain' />
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                    color = "#78002e"
                />
                <Text style={{color: '#FFE81F', fontSize: 20, }}>Para ingresar a la App tendras que loguearte</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
});