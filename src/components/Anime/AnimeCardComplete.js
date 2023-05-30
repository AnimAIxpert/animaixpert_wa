import React from "react";

// reactstrap components
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";

function AnimeCardComplete(properties){
    console.log("AnimeCardComplete Props:");
    const props = properties['0']
    console.log(props.id);
    return(
        <Container style={{
            background: 'deepskyblue',
            margin: 'auto',
            }}>
            <Card style={{background: 'deepskyblue',color: 'white',}}>
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
                    </Col>
                    </Row>
                </CardBody>
                <CardFooter style={{height: 'fit-content'}}>
                    <Row>
                        <Col >
                        <div style={{maxWidth:"20%", marginLeft: 'auto', marginRight: 'auto'}}>
                            <h6>Rate this anime</h6>
                            <div className="slider" id="sliderRegular"></div><br></br>
                            <Button color="info" size="sm">
                                Rate
                            </Button> 
                        </div>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Container>
    );
}

export default AnimeCardComplete;