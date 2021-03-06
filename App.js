import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import styles from './components/styles';
import Header from './components/header';
import Menu from './components/menu';
import Game from './components/game';
import Win from './components/win';


const App = () => {
 
  const [darkTheme, setDarkTheme] = useState(false);
  const [screen, setScreen] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');
  const [lang, setLang] = useState(true);
  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);

  const toggleLang = () => setLang(!lang);
  const toggleSwitch = () => setDarkTheme(previousState => !previousState);

  function iniciarJogo(jogador){
    setJogadorAtual(jogador);
    
    setJogadasRestantes(9);
    setTabuleiro([
      ['','',''],
      ['','',''],
      ['','',''],
    ]);


    setScreen('game');
  }

  switch (screen) {
    case 'menu':
      return getScreenMenu();
    case 'game':
      return getScreenGame();
    case 'win':
      return getScreenWin();
  }
  
  function getScreenMenu(){
    return (
      < >
        <Header darkTheme={darkTheme} toggleSwitch = {toggleSwitch} toggleLang={toggleLang} lang={lang}/>
        <Menu darkTheme={darkTheme} iniciarJogo={iniciarJogo} lang={lang} />
      </>
    )
  }
  function jogar(linha, coluna){
    tabuleiro[linha][coluna] = jogadorAtual;
    setTabuleiro([...tabuleiro]);

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');

    verificarGanhador(tabuleiro,linha,coluna);

  }
function verificarGanhador(tabuleiro,linha,coluna) {
  //linhas
  if(tabuleiro[linha][0] !='' && tabuleiro[linha][0] == tabuleiro[linha][1] && tabuleiro[linha][1] == tabuleiro[linha][2] ) {
    return finalizarJogo(tabuleiro[linha][0]);
  }
  //colunas
  if(tabuleiro[0][coluna] !='' && tabuleiro[0][coluna] == tabuleiro[1][coluna] && tabuleiro[1][coluna] == tabuleiro[2][coluna] ) {
    return finalizarJogo(tabuleiro[0][coluna]);
  }
  //diagonal 1
  if(tabuleiro[0][0] !='' &&tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2] ) {
    return finalizarJogo(tabuleiro[0][0]);
  }

  //diagonal 2
  if(tabuleiro[0][2] !='' && tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0] ) {
    return finalizarJogo(tabuleiro[0][2]);
  }
  //Nenhum Ganhador
  if (jogadasRestantes - 1 === 0) {
    return finalizarJogo('');
  }
  //Jogo nao finalizado
  setJogadasRestantes ((jogadasRestantes - 1));
}

function finalizarJogo(jogador) {
  setGanhador(jogador);
  if (jogador === 'X'){
    setWinX(winX + 1);
  }else if (jogador === 'O') {
    setWinO(winO + 1);
  }
  setScreen('win');
}
  function getScreenGame(){
    return (
      <>
        <Header darkTheme={darkTheme} toggleSwitch = {toggleSwitch} toggleLang={toggleLang} lang={lang} />
        <Game darkTheme={darkTheme} 
              tabuleiro={tabuleiro} 
              jogar={jogar} 
              setScreen={setScreen} 
              linha={tabuleiro.linha} 
              coluna={tabuleiro.coluna} 
              lang={lang} 
              jogadorAtual={jogadorAtual}
              winX={winX}
              winO={winO}
        />
    </>
    )
  }

  function getScreenWin(){
    return (
      <>
      <Header darkTheme={darkTheme} toggleSwitch = {toggleSwitch} toggleLang={toggleLang} lang={lang}/>
      <Win darkTheme={darkTheme} 
           ganhador={ganhador} 
           setScreen={setScreen} 
           lang={lang}             
           winX={winX}
           winO={winO} 
      />
    </>
    )
  }

  
};



export default App;
