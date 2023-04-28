import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {

    const [result,setResult]=useState("");

    const clickHandler =(event) => {
      setResult(result.concat(event.target.value))
    }

    const clearDisplay=()=> {
      setResult("");
    }

    const calculate =() => {
      setResult(eval(result).toString());
    }


  return (
    <>

      <div className='full'>   
       <h1 id='title'>⋇⊶⊰❣⊱⊷⋇\_Messy_Caclulator_/⋇⊶⊰❣⊱⊷⋇</h1>


<div className='body'>
<div className="calc">
<input type="text" placeholder="0" id="answer"
 value={result}/>

<input type="button" value="9" className="button" onClick={clickHandler}/>
<input type="button" value="8" className="button" onClick={clickHandler} />
<input type="button" value="7" className="button" onClick={clickHandler}/>
<input type="button" value="+" className="button" onClick={clickHandler}/>
<input type="button" value="6" className="button" onClick={clickHandler}/>
<input type="button" value="5" className="button" onClick={clickHandler}/>
<input type="button" value="4" className="button" onClick={clickHandler}/>
<input type="button" value="-" className="button" onClick={clickHandler}/>
<input type="button" value="3" className="button" onClick={clickHandler}/>
<input type="button" value="2" className="button" onClick={clickHandler}/>
<input type="button" value="1" className="button" onClick={clickHandler}/>
<input type="button" value="*" className="button" onClick={clickHandler}/>
<input type="button" value="." className="button" onClick={clickHandler}/>
<input type="button" value="0" className="button" onClick={clickHandler}/>
<input type="button" value="%" className="button" onClick={clickHandler}/>
<input type="button" value="/" className="button" onClick={clickHandler}/>
<input type="button" value="=" className="button " id="button1" onClick={calculate} />
<input type="button" value="clear"className="button " id="button2" onClick={clearDisplay} />


</div>
</div>

   <h1 id='footer'> •✧❅\_BRAINSTORMING_/❅✧• </h1>

   <div id='bigg'>
   <div id='bigbox'>
   <input type="button" value="🧠" className='big' />
   </div>
   </div>

      </div>
     </>
  );
}

export default App;
