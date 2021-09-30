import Input from "../UI/Input";
import classes from "./Form.module.css";
import Card from "../UI/Card";
import React, {useRef, useState} from "react";

const Form = (props) => {
    //Controlled Input Fields START
    const [findInput, setFindInput] = useState("");
    const [replaceInput, setReplaceInput] = useState("");
    //Controlled Input Fields END

    // button to toggle the Find and Replace button START
    const [showReplaceInputBtn, setReplaceInputBtn] = useState(false)
    // button to toggle the Find and Replace button END
    const findWordInputFieldRef = useRef();
    const replaceWordInputFieldRef = useRef();

    const showReplaceInputHandler = () =>{
        setReplaceInputBtn(prevValue => !prevValue)
    }

    const inputOnChangeHandler = (event) =>{
       setFindInput(event.target.value);
    }

    const replaceOnChangeHandler = (event)=> {
       setReplaceInput(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        props.formInputValue(findInput, replaceInput);
    }

    // short cut button feature
    document.onkeydown = checkShortcuts;
    function checkShortcuts(event){
        if(event.ctrlKey && event.which === 191){
            findWordInputFieldRef.current.focus()
            findWordInputFieldRef.current.select()
        }
    }

    return (
        <React.Fragment>
            {findInput.length < 1 && <h4 className={classes.warning}>Enter a Search Term</h4>}
            <Card className={!showReplaceInputBtn ? classes.card: classes.cardHeight}>
        <form onSubmit={onSubmitHandler} className = {classes.form}>
            <div className={classes.replaceBtn} onClick = {showReplaceInputHandler}>{!showReplaceInputBtn? <span className = {classes.arrow}>&#8595;</span>:<span className = {classes.arrow}>&#8593;</span> }</div>
            <div className={classes.input}>
            <Input value = {findInput} Ref={findWordInputFieldRef} onchange = {inputOnChangeHandler} input={
            { id:"1",
                type:"text",
                placeholder: "Search Word" }
            }/>
            {showReplaceInputBtn && <Input value = {replaceInput} Ref={replaceWordInputFieldRef}
            onchange = {replaceOnChangeHandler}
            input={
            { id:"2",
                type:"text",
                placeholder: "Replace word" }
            }/>}
            {showReplaceInputBtn && <button className={classes.findBtn} type="submit">Find and Replace</button>}
            </div>
            {!showReplaceInputBtn && <button className={classes.findBtn} type="submit">Find</button>}
        </form>
    </Card>   
        </React.Fragment>

     
    )
}

export default Form;