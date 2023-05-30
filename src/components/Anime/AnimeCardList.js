import React from "react";

import AnimeCard from "components/Anime/AnimeCard";

import { Row, Col } from "reactstrap";

function AnimeCardList(props){
    
    const createCard = (anime) => {
        return(
            <Col style={{
                padding: '0'
            }}>
                <AnimeCard id={anime.id} image_path={anime.image_url} anime_name={anime.name}/>
            </Col>
        );
    }
    
    return(
        <div 
        className="anime-row"
        style={{
            // maxWidth: '80%',
            // display: 'inline-block',
            width: 'fit-content',
            margin: 'auto'
        }}>
            <Row>
                {props.animes.map(createCard)}
            </Row>
        </div>
    );
}

export default AnimeCardList;