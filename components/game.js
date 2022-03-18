import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
 
} from 'react-native';

import pt_br from './lang/ptbr';
import eng from './lang/eng';

import styles from './styles';

 function Game (props) {

    return(
        <>  
            <View style={props.darkTheme === false ? styles.inlineItemsGame : styles.inlineItemsGameBlack}>
                <Text style={styles.subtitulo}>Jogador X - {props.winX}</Text>
                <Text style={styles.subtitulo}>Jogador O - {props.winO}</Text>
            </View>
            <View style={props.darkTheme === false ? styles.inlineItemsGame : styles.inlineItemsGameBlack}>
                {<Text style={styles.subtitulo}>Vez do {props.jogadorAtual}</Text>}
            </View>
            <View style={props.darkTheme === false ? styles.Container : styles.ContainerBlack}>
                <Text style={props.darkTheme === false ? styles.Titulo: styles.TituloBlack}>{props.lang === true ? pt_br[0] : eng[0]}</Text>
                
                
                {
                    props.tabuleiro.map((linha, numeroLinha)=>{
                    return ( 
                        <View key= {numeroLinha} style={styles.inlineItems}>
                        {
                            linha.map((coluna, numeroColuna)=>{
                            return (
                                <TouchableOpacity 
                                key= {numeroColuna}
                                style={props.darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
                                onPress={()=>props.jogar(numeroLinha,numeroColuna)}
                                disabled={coluna !== ''}>
                                    <Text style={coluna === 'X' ? styles.jogadorX : styles.jogadorO}>{coluna}</Text>
                                </TouchableOpacity>
                            )
                            })
                        }
                    </View>
                    )})
                    
                }

                    <TouchableOpacity 
                        style={props.darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack} 
                        onPress={()=>props.setScreen('menu')}>
                        <Text style={props.darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack}>{props.lang === true ? pt_br[2] : eng[2]}</Text>
                    </TouchableOpacity>
                
                
                
                
                </View>
        </>
    )
 }
 
 export default Game;