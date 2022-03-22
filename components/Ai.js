function Ai () {

    let linha = 0;
    let coluna = 0;

    linha=parseInt(Math.random() * 2, 10) ;
    coluna=parseInt(Math.random() * 2, 10) ;
    return linha, coluna ;
}

export default Ai;