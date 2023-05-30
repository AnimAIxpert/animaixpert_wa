import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
function AnimeCard(props){
    return(
        <Link to={`/anime/${props.id}`}>
        <Card
            style={{
                width: '16rem',
                height: '22rem',
                alignItems: 'center',
            }}
            >
            <img
                style={{
                    width: '100%',
                    height: '80%',
                }}
                alt={props.anime_name}
                src={props.image_path}
                
            />
            <CardBody>
                <CardTitle tag="h6">
                {props.anime_name}
                </CardTitle>
            </CardBody>
            </Card>
        </Link>
    );
}

export default AnimeCard;