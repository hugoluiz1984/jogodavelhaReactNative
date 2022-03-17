import React, {useState} from 'react';

import {
  StyleSheet,
} from 'react-native';

    const styles = StyleSheet.create({
        Container: {
          flex:1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ContainerBlack: {
          flex:1,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        },
        Titulo: {
          fontFamily: 'Righteous',
          fontSize:30,
          color:'#555',
          marginTop:20,
        },
        TituloBlack: {
          fontFamily: 'Righteous',
          fontSize:30,
          color:'#aaaaaa',
          marginTop:20,
        },
        subtitulo: {
          fontFamily: 'Righteous',
          fontSize:20,
          color:'#555',
          marginTop:20,
        },
        subtituloBlack: {
          fontFamily: 'Righteous',
          fontSize:20,
          color:'#aaaaaa',
          marginTop:20,
        },
        boxJogador:{
          fontFamily: 'Righteous',
          width:80,
          height:80,
          backgroundColor: '#eee',
          alignItems: 'center',
          justifyContent: 'center',
          margin:5,
        },
        boxJogadorBlack:{
          fontFamily: 'Righteous',
          width:80,
          height:80,
          backgroundColor: '#111',
          alignItems: 'center',
          justifyContent: 'center',
          margin:5,
        },
        jogadorX: {
          fontFamily: 'Righteous',
          fontSize:40,
          color:'#553fda'
        },
        jogadorO: {
          fontFamily: 'Righteous',
          fontSize:40,
          color:'#da3f3f'
        },
        inlineItemsMenu:{
          flexDirection:'row',
          justifyContent: "flex-end",
          gap: 5,
        },
        inlineItemsMenuBlack:{
          flexDirection:'row',
          backgroundColor:'#000000',
          justifyContent: "flex-end",
          gap: 5,
        },
        inlineItems:{
          flexDirection:'row',
        },
        inlineItemsBlack:{
          flexDirection:'row',
          backgroundColor:'#000000',
        },
        botaoMenu: {
          marginTop:20,
        },
        textoBotaoMenu: {
          color:'#4e6fe4'
        },
        textoBotaoMenuBlack: {
          color:'#ffffff'
        },
        ganhador:{
          fontFamily: 'Righteous',
          fontSize: 20,
          fontWeight: 'bold',
          color:'#333',
        },
        ganhadorBlack:{
          fontFamily: 'Righteous',
          fontSize: 20,
          fontWeight: 'bold',
          color:'#cccccc',
        },
        light: {
          
        },
        dark:{
          backgroundColor:'#000000',
        }
    })

export default styles;