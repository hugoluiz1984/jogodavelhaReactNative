import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';


const App = () => {
 
  const [darkTheme, setDarkTheme] = useState(false);
  const [screen, setScreen] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

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
      <View style={darkTheme === false ? styles.inlineItems : styles.inlineItemsBlack}>
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9728;</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkTheme}
          />
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9790;</Text>
        </View>
      <View style={darkTheme === false ? styles.Container : styles.ContainerBlack}>
        
        
        <Text style={darkTheme === false ? styles.Titulo: styles.TituloBlack}>Jogo da Velha</Text>
        <Text style={darkTheme === false ? styles.subtitulo : styles.subtituloBlack}>Selecione o primeiro jogador</Text>

        <View style={styles.inlineItems}>
          <TouchableOpacity 
            style={darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
            onPress={()=>iniciarJogo('X')}>
              <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
            onPress={()=>iniciarJogo('O')}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>
        </View>
        
        
        <StatusBar style="auto" />
      </View>
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
  setScreen('win');
}
  function getScreenGame(){
    return (
      <>
      <View style={darkTheme === false ? styles.inlineItems : styles.inlineItemsBlack}>
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9728;</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkTheme}
          />
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9790;</Text>
        </View>
      <View style={darkTheme === false ? styles.Container : styles.ContainerBlack}>
      <Text style={darkTheme === false ? styles.Titulo: styles.TituloBlack}>Jogo da Velha</Text>
      
      
      {
        tabuleiro.map((linha, numeroLinha)=>{
          return ( 
            <View key= {numeroLinha} style={styles.inlineItems}>
              {
                linha.map((coluna, numeroColuna)=>{
                  return (
                    <TouchableOpacity 
                      key= {numeroColuna}
                      style={darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
                      onPress={()=>jogar(numeroLinha,numeroColuna)}
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
            style={darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack} 
            onPress={()=>setScreen('menu')}>
              <Text style={darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack}>Voltar ao Menu</Text>
          </TouchableOpacity>
      
      
      
      <StatusBar style="auto" />
    </View>
    </>
    )
  }

  function getScreenWin(){
    return (
      <>
      <View style={darkTheme === false ? styles.inlineItems : styles.inlineItemsBlack}>
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9728;</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkTheme}
          />
          <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>&#9790;</Text>
        </View>
      <View style={darkTheme === false ? styles.Container : styles.ContainerBlack}>
      <Text style={darkTheme === false ? styles.Titulo: styles.TituloBlack}>Jogo da Velha</Text>
      <Text style={darkTheme === false ? styles.subtitulo : styles.subtituloBlack}>Resultado Final</Text>

      {
        ganhador === '' && 
        <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>Nenhum ganhador</Text>
      }
      {
        ganhador !== '' && 
        <>
        <Text style={darkTheme === false ? styles.ganhador : styles.ganhadorBlack}>Ganhador</Text>
          <TouchableOpacity 
            style={darkTheme === false ? styles.boxJogador : styles.boxJogadorBlack} 
 
            disabled={true}>
              <Text style={ganhador === 'X' ? styles.jogadorX : styles.jogadorO}>{ganhador}</Text>
          </TouchableOpacity>
        </>
      }

      <TouchableOpacity 
            style={styles.botaoMenu} 
            onPress={()=>setScreen('menu')}>
              <Text style={darkTheme === false ? styles.textoBotaoMenu : styles.textoBotaoMenuBlack}>Voltar ao Menu</Text>
          </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
    </>
    )
  }

  
};

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
  
});

export default App;
