import AnimeCardComplete from "components/Anime/AnimeCardComplete";
import React, {useState, useEffect} from "react";

import { getAnimeById } from "services";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AnimeDetails(props){
    const [anime, setAnime] = useState({});
    useEffect(() => {
        const req = getAnimeById(props.match.params.id)
        Promise.all([req])
        .then((anime) => {
            setAnime(anime);
        });
    }, []);
    
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main" style={{backgroundColor:"lightcyan"}}>
                {Object.keys(anime).length === 0  ? "" : <AnimeCardComplete {...anime} />}
                </div>
                <DarkFooter />
            </div>
        </>
    );
}
export default AnimeDetails;