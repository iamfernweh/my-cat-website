import { Button } from "@mui/material";
import './RandomPic.css';

function RandomPic({ imgUrl, refetchFunction }) {
    return (
        <>
            <Button onClick={refetchFunction} variant="outlined" color="success">New Dog</Button>
            <br /><br />
            <img className="random-pic" src={imgUrl} />
        </>
    );
}

export default RandomPic;