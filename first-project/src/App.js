import logo from './logo.svg';
import "./App.css";
import {Card} from './components/Card';
import Box from  './components/Box';

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
       <Card name="Jane"/>
       <Box name="John"/>
    </div>

  );
}
