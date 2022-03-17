import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';

import styles from './styles';

 function Header (props) {

    return(
        <View>
            <View style={props.darkTheme === false ? styles.inlineItemsMenu : styles.inlineItemsMenuBlack}>
                <TouchableOpacity 
                    style={props.darkTheme === false ? styles.boxlanguage : styles.boxlanguage} 
                    onPress={props.toggleLang}>
                    <Text style={styles.ganhador}>{props.lang === true ? 'ENG' : 'PT-BR'}</Text>
                </TouchableOpacity>
                
                
                <Text style={props.darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9728;</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={props.darkTheme ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={props.toggleSwitch}
                    value={props.darkTheme}
                />
                <Text style={props.darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9790;</Text>
            </View>
        </View>
    )
 }
 
 export default Header;