import Card from "../UI/Card";
import classes from "./Content.module.css"


const Content = (props)=>{
    return <Card className={classes.content}><div>{props.value}</div></Card>
}


export default Content;