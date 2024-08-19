
import TestString from './TestString';
import TestNumber from './TestNumber';
import TestBoolean from './TestBoolean';
import TestObject from './TestObject';
import TestFunction from './TestFunction';
import TestArray from './TestArray';
import './App.css'

const myFunc = () => <div>This is my function!</div>;
const myArr = ['JavaScript', 'React', 'TypeScript'];


function App() {
  return (
      <div >  
        
        <TestString name = {"Nata"}/>
        <TestNumber age = {37}/>
        <TestBoolean boolean = {"false"}/>
        <TestObject myObj = {{isWoman: "true"}}/>
        <TestFunction myFunc = {myFunc()}/>
        <TestArray myArr = {myArr}/>
        

        


      </div> 
                  
    
  )
}

export default App


