import { useState } from "react";
// numbers

function handleClick(event){
    console.log(event);

}
const Button =(props) => {
    return <button onClick={ props.handleClick } id={ props.id }>{ props.value }</button>;
} 




function Calculator(props){
    const [val, setVal] = useState(0);
    const [op, setOp] = useState('');

    return (
        <div id="container">
            <div id="display">888888888888888</div>

            <Button id="clear" handleClick={ handleClick } value="AC" />
            <Button id="divide" handleClick= { handleClick } value="/"/>
            <Button id="multiply" handleClick={ handleClick } value="*"/>
            <Button id="seven" handleClick={ handleClick } value="7"/><Button id="eight" handleClick={ handleClick } value="8"/><Button id="nine" handleClick={ handleClick } value="9"/><Button id="subtract" handleClick={ handleClick } value="-"/>
            <Button id="four" handleClick={ handleClick } value="4"/><Button id="five" handleClick={ handleClick } value="5"/><Button id="six" handleClick={ handleClick } value="6"/><Button id="add" handleClick={ handleClick } value="+"/>
            <Button id="one" handleClick={ handleClick } value="1"/><Button id="two" handleClick={ handleClick } value="2"/><Button id="three" handleClick={ handleClick } value="3"/><Button id="equals" handleClick={ handleClick } value="="/>
            <Button id="zero" handleClick={ handleClick } value="0"/><Button id="decimal" handleClick={ handleClick } value="."/>
        </div>
    );
}


export default Calculator;

