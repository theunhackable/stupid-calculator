import { useState } from "react";

// calculations

function compute(expression){
    try{
        return eval(expression);
    }
    catch(exception){
        return "INVALID EXPRESSION";
    }
}

function Calculator(props){
    const [data, setData] = useState({
        expression: '0',
        result: '0',


    });
    const Button =(props) => {
        return <button onClick={ props.handleClick } id={ props.id } value={ props.value }>{ props.value }</button>;
    } 

    function handleClick(event){
        switch(event.target.value){
            
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                setData(
                    (prevData) => {
                        return {
                            expression: prevData.expression === "INVALID EXPRESSION" || prevData.expression === "0"? event.target.value: prevData.result + event.target.value,
                            result: prevData.result === "0"? event.target.value: prevData.result + event.target.value
                        }
                    }
                )
                break;
            case "-":
            case "+":
            case "*":
            case "/":
            case ".":
                setData(
                    (prevData) => {
                        return {
                            expression: prevData.expression + event.target.value,
                            result: prevData.result + event.target.value
                        }
                    }
                )
                break;
            case "AC":
                setData(
                    (prevData) => {
                        return {
                            expression: '0',
                            result: '0'
                        }
                    }
                )
                break;
            case "=":
                const ans = compute(data.expression);
                if(ans !== "INVALID EXPRESSION") {
                    const rounded = Math.round(ans*10000)/10000;
                    setData(
                        (prevData) => {
                            return {
                                expression: prevData.expression + "=" + rounded,
                                result: rounded
                            }
                        }
                    )
                }
                else {
                    setData(
                        (prevData) => {
                            return {
                                expression: ans,
                                result: '0'
                            }
                        }
                    )
                }

                
                break;

            default: 
                break;
        }
        console.log("expression=",data.expression);
        console.log("result=",data.result);

    }
// 3 + 5 * 6 - 2 / 4
    return (
        <div id="container">
            
            <div id="display">
                <p id="expression">{ data.expression }</p>
                <p id="result"> { data.result } </p>
            </div>

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

