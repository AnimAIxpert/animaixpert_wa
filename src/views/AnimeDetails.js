import AnimeCardComplete from "components/Anime/AnimeCardComplete";
import React, {useState, useEffect} from "react";

import { getAnimeById } from "services";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { Container } from "reactstrap";

function AnimeDetails(props){
    const [anime, setAnime] = useState({});
    useEffect(() => {
        const req = getAnimeById(props.match.params.id)
        Promise.all([req])
        .then((anime) => {
            setAnime(anime);
        });
    }, []);

    useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("login-page");
          document.body.classList.remove("sidebar-collapse");
        };
      }, []);
    
    return (
        <>
            <ExamplesNavbar />
            {/* <div className="page-header clear-filter" filter-color="blue"> */}
            <div
            className="page-header-image"
            style={{
                backgroundImage: "url(" + require("assets/img/details.jpg") + ")"
            }}
            >
                <Container>

                    {Object.keys(anime).length === 0  ? "" : <AnimeCardComplete {...anime} />}
                </Container>
                <DarkFooter />
            </div>
        {/* </div> */}
        </>
    );
}
export default AnimeDetails;