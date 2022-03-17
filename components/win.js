import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
 
} from 'react-native';

import pt_br from './lang/ptbr';
import eng from './lang/eng';

import styles from './styles';

 function Win (props) {

    return(
        <>
            
            <View style={props.darkTheme === false ? styles.Container : styles.ContainerBlack}>
            <Text style={props.darkTheme === false ? styles.Titulo: styles.TituloBlack}>{props.lang === true ? pt_br[0] : eng[0]}</Text>
            <Text style={props.darkTheme === false ? styles.subtitulo : styles.subtituloBlack}>{props.lang === true ? pt_br[5] : eng[5]}</Text>

            {
                props.ganhador === '' && 
                <Text style={props.darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>{props.lang === true ? pt_br[3] : eng[3]}</Text>
            }
            {
                props.ganhador !== '' && 
                <>
                <Text style={props.darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>{props.lang === true ? pt_br[4] : eng[4]}</Text>
                <TouchableOpacity 
                    style={props.darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
        
                    disabled={true}>
                    <Text style={props.ganhador === 'X' ? styles.jogadorX : styles.jogadorO}>{props.ganhador}</Text>
                </TouchableOpacity>
                </>
            }

            <TouchableOpacity 
                    style={styles.botaoMenu} 
                    onPress={()=>props.setScreen('menu')}>
                    <Text style={props.darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack}>{props.lang === true ? pt_br[2] : eng[2]}</Text>
                </TouchableOpacity>
            

            </View>
        </>
    )
 }
 
 export default Win;