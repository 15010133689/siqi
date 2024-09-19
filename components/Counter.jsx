import { Button, TextField} from "@mui/material";

const Counter = ({decSx,incSx,textSx,count,increment,decrement}) => {

    return(
        <>
            <Button sx={decSx} onClick={decrement}>-</Button>
            <TextField
                sx={textSx}
                value={count < 0 ? 0 : count}
            />
            <Button sx={incSx} onClick={increment}>+</Button>
        </>
    )
}
export default Counter