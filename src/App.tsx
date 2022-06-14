
import React, { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import {levels, CalcularIMC, Level} from './helpers/imc';
import {GridItem} from './components/GridItem/index';



const App = ()=>{

// Variaveis de altura e peso
const [Altura, setAltura] = useState(0);
const [Peso, setPeso] = useState(0);
const [MostrarItem, setItem] = useState<Level | null>(null);

// Função para calcular o IMC
const CalculoIMC = ()=>{
  if(Altura && Peso){
    setItem(CalcularIMC(Altura, Peso));
  }else{
    alert("Digite todos os campos.")
  }
};

const BotaoVoltar = ()=>{
  setItem(null);
  setAltura(0);
  setPeso(0);
  
}

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}></img>

        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sígla para Índice de massa Corpórea , parametro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
          <input type="number" placeholder='Digite a sua altura. Ex: 1.5 (em métros)' value={Altura >0 ? Altura : ''}  onChange={e => setAltura(parseFloat(e.target.value))} disabled={MostrarItem ? true : false} ></input>
          <input type="number" placeholder='Digite o seu peso. Ex: 70 (em kg)' value={Peso >0 ? Peso : ''}  onChange={e => setPeso(parseFloat(e.target.value))} disabled={MostrarItem ? true : false} ></input>
          <button onClick={CalculoIMC} disabled={MostrarItem ? true : false} >Calcular </button>
        </div>



        <div className={styles.rightSide}>
          {! MostrarItem &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
              ))} 
            </div>
          }
          {MostrarItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={BotaoVoltar}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item= {MostrarItem}/>
            </div>
          }
            
        </div>
      </div>

    </div>
  )
}

export default App;