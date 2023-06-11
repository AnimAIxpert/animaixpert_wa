import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
function AnimeCard(props){
    // console.log(props.image_path);
    const image_path = props.image_path ? props.image_path : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
    return(
        <Link to={`/anime/${props.id}`}>
        <Card
            style={{
                width: '16rem',
                height: '22rem',
                alignItems: 'center',
                background: 'rgba(0,0,0,.6)',
                color: 'white',
            }}
            >
            <img
                style={{
                    width: '100%',
                    height: '80%',
                }}
                alt={props.anime_name}
                src={image_path}
                
            />
            <CardBody>
                <CardTitle tag="h6" >
                {props.anime_name}
                </CardTitle>
            </CardBody>
            </Card>
        </Link>
    );
}

export default AnimeCard;