import React, {useState, useEffect} from "react";

import { getRatingByIds, createRating } from "services/rating-services";
import store from '../../redux/store';

// reactstrap components
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import Rating from '@mui/material/Rating';

function AnimeCardComplete(properties){
    // console.log("AnimeCardComplete Props:");
    const props = properties['0']
    // console.log(props.id);
    const [isRated, setIsRated] = useState(false);
    const [msg, setMsg] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [rating, setRating] = useState(1);
    const [userRating, setUserRating] = useState(1);
    
    const updateRating = (value) => {
        setRating(value);
    };

    const  submitRating = async () => {
        console.log("rating: " + rating);
        console.log("user: " + store.getState().user.username);
        console.log("anime: " + props.id);
        let res = await createRating(store.getState().user.username, props.id, rating);
        if(res){
            setMsg("Rating updated successfully!");
            setUserRating(rating);
        } else{
            setErrMessage("Rating update failed!");
        }
    };

    useEffect(() => {
            if(store.getState().user.token){
                getRatingByIds(store.getState().user.username, props.id).then((ratings) => {
                    if (ratings.length > 0 ){
                        setIsRated(true);
                        setUserRating(ratings[0].rating);
                    }   
                })
                
            }
            
    },[]);


    return(
        <Container 
            // style={{
            // background: 'deepskyblue',
            // margin: 'auto',
            // }}
            >
        
            
            <Card 
            style={{background: 'transparent',color: 'white', }}
            >
                <CardHeader style={{
                    height: 'fit-content',
                    paddingBottom: '10px',
                    // marginBottom: '5px',
                }}>
                    <center>
                    <CardTitle tag="h3">
                        {props.name}
                    </CardTitle>
                    <CardSubtitle tag="h6">
                        {props.japanese_name}
                    </CardSubtitle>
                    </center>
                </CardHeader>
                <CardBody >
                    <Row>
                    <Col md={3}>
                        <img
                            style={{
                                width: '14rem',
                                height: '20rem',
                            }}
                            alt={props.name}
                            src={props.image_url}
                            />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <h6>Score:</h6> {props.score}
                            </Col>
                            <Col>
                                <h6>English Name:</h6> {props.english_name}
                            </Col>
                            <Col>
                                <h6>Source:</h6> {props.source}
                            </Col>    
                        </Row>
                        <Row>
                            <Col>
                            <h6>Genres: </h6>
                                {props.genres.map((genre) => {
                                return(<Badge color="black">
                                    {genre}
                                </Badge>)
                                })}
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{width: '20px'}}>
                                <h6>Type:</h6> {props.type}
                            </Col>
                            <Col>
                                <h6>Episodes:</h6> {props.episodes}
                            </Col>
                            <Col>
                                <h6>Aired:</h6> {props.aired}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Premiered:</h6> {props.premiered}
                            </Col>
                            <Col>
                                <h6>Duration:</h6> {props.duration}
                            </Col>
                            <Col>
                                <h6>Audience:</h6> {props.audience}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Producers:</h6> {props.producers.map((producers) => {
                                return(<Badge color="black">
                                    {producers}
                                </Badge>)
                                })}
                            </Col>
                            <Col>
                                <h6>Studios:</h6> {props.studios.map((studios) => {
                                    return(<Badge color="black">
                                        {studios}
                                    </Badge>)
                                    })}
                            </Col>
                            <Col>
                                <h6>Licensors:</h6> {props.licensors.map((licensors) => {
                                    return(<Badge color="black">
                                        {licensors}
                                    </Badge>)
                                    })}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h6>Synopsis:</h6> {props.synopsis}
                            </Col>
                        </Row>
                {store.getState().user.token ? (
                    // <CardFooter style={{height: 'fit-content'}}>
                    <Row>
                        <Col style={{maxWidth:"20%", marginLeft: 'auto', marginRight: 'auto'}}>
                            {isRated ?  (
                                <>
                                    <h6> Your Rating: {userRating} </h6>
                                    <Rating name="customized-10" defaultValue={2} max={10} onChange={(e) => updateRating(e.target.value)} />
                                    <Button color="info" size="sm" onClick={() => submitRating()}>
                                        Modify
                                    </Button> 
                                </>
                            ) : (
                                <>
                                    <h6>Rate this anime</h6><br></br>
                                    <Rating name="customized-10" defaultValue={2} max={10} onChange={(e) => updateRating(e.target.value)} />
                                    <Button color="info" size="sm" onClick={() => submitRating()}>
                                        Rate
                                    </Button>
                                </>
                            )}
                            {
                                msg ? (
                                    <>
                                        <h6 style={{color: "green"}}>
                                            {msg}
                                        </h6>
                                    </>
                                ) : (
                                    <>
                                        <h6 style={{color: "red"}}>
                                            {errMessage}
                                        </h6>
                                    </>    
                                )
                            }
                        </Col>
                    </Row>
                // </CardFooter>
                ) :
                (
                    ""
                )
                
            }
                    </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default AnimeCardComplete;