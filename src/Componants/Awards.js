import { List, ListItem, ListItemText, makeStyles, ListItemIcon } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) =>{
    return {
      listCss: {
        background: 'orange',
        borderRadius: "12px",
        padding: "0px 5px",
      },
    }
})

const Awards = () =>{
    const classes = useStyles()
    const awards = useSelector(state => state.awardsList)
    const activeAward = useSelector(state => state.activeAward)
    console.log(awards)

    return <div style = {{flex: "0.2", backgroundColor: "#058ED9", color: "white"}}>
        <List >
            {awards.map((item, index)=>(
                <ListItem className = {activeAward === item ? classes.listCss : null} style = {{curser: "pointer"}}  > 
                    <ListItemIcon style = {{ color: "white", fontSize: "20px"}}> {index+1}. </ListItemIcon>
                <ListItemText style = {{fontWeight: "bold", fontSize: "32px", color: "white"}}>{item}</ListItemText>
            </ListItem>
            ))}
            
        </List>
        </div>
}

export default Awards;