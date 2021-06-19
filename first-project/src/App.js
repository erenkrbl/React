import logo from './logo.svg';
import "./App.css";

export const addTwoNumbers1 = (fnumber, snumber) => {
  return fnumber + snumber;
}

const getSquare = square => square * square;
export const addTwoNumbers2 = (fnumber, snumber) =>  fnumber + snumber;

export function addTwoNumbers3(fnumber, snumber) {
  return fnumber + snumber;
}

export default function App() {
  return (
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
           Clarusway
        </p>
        <h1>{addTwoNumbers1(1, 3)}</h1>
        <h1>{addTwoNumbers2(1, 4)}</h1>
        <h1>{addTwoNumbers3(1, 5)}</h1>
        <h1>{getSquare(5)}</h1>         
       </header>
    </div>

  );
}
