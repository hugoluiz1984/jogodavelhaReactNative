import React, {useState} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';

import pt_br from './lang/ptbr';
import eng from './lang/eng';

import styles from './styles';

 function Menu (props) {

    return(
        <>
            <View style={props.darkTheme === false ? styles.Container : styles.ContainerBlack}>
                
                
                <Text style={props.darkTheme === false ? styles.Titulo: styles.TituloBlack}>{props.lang === true ? pt_br[0] : eng[0]}</Text>
                <Text style={props.darkTheme === false ? styles.subtitulo : styles.subtituloBlack}>{props.lang === true ? pt_br[1] : eng[1]}</Text>

                <View style={styles.inlineItems}>
                <TouchableOpacity 
                    style={props.darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
                    onPress={()=>props.iniciarJogo('X')}>
                    <Text style={styles.jogadorX}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={props.darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
                    onPress={()=>props.iniciarJogo('O')}>
                    <Text style={styles.jogadorO}>O</Text>
                </TouchableOpacity>
                </View>
 
            </View>
        </>
    )
 }
 
 export default Menu;