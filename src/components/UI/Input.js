import classes from "./Input.module.css"

const Input = (props)=>{

    return (
    <div className = {classes.inputDiv}>
        <input ref={props.Ref} onChange={props.onchange} className={classes.input} {...props.input} value = {props.value}></input>
    </div>)
}

export default Input;