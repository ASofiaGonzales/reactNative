
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
import {AdivinarPersonaje} from "../Screens/AdivinarPersonaje";
console.log(HomeScreen, InfoScreen, AdivinarPersonaje);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Instrucciones" component={InfoScreen} />
                <Drawer.Screen name="Jugar" component={AdivinarPersonaje} />
            </Drawer.Navigator>
        );
    }
    
}

