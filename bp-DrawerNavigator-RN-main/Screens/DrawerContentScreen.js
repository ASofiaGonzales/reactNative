import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {
    constructor(props){
        super(props);        
    }

    handlerLogout = () => {
        this.props.onLogout();
    }
    render(){

        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-circle" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="information" style={styles.icon}/>}
                            label="Instrucciones"
                            onPress={() => this.props.navigation.navigate("Instrucciones")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="gamepad-variant" style={styles.icon}/>}
                            label="Jugar"
                            onPress={() => this.props.navigation.navigate("Jugar")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>                    
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFCE2',
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    });