import React, { useState } from "react";

import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  Label
} from 'reactstrap';

import AnimeCardList from "./AnimeCardList";

function AnimeCarrousel(props){
  const processRowList = (row_list) => {
    const chunkSize = 6;
    var ans = []
    for (let i = 0; i < row_list.length; i += chunkSize) {
        const chunk = row_list.slice(i, i + chunkSize);
        ans.push(chunk);
    }
    return ans
  }

  const { row_list, title } = props;
  // console.log("row_list");
  // console.log(row_list);
  const row_lists = processRowList(row_list);
  // console.log("row_lists");
  // console.log(row_lists);
    // const row_list = [
    //     [
    //         {
    //           anime_name: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg"
    //         },
    //         {
    //           anime_name: "Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1764/106659.jpg"
    //         },
    //         {
    //           anime_name: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1160/122627.jpg"
    //         },
    //         {
    //           anime_name: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1670/130060.jpg"
    //         },
    //         {
    //           anime_name: "Monogatari Series: Second Season",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1807/121534.jpg"
    //         },
    //         {
    //           anime_name: "Monogatari Series: Second Season",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1807/121534.jpg"
    //         }
    //       ],
    //       [
    //         {
    //           anime_name: "Bakemonogatari",
    //           image_path: "https://cdn.myanimelist.net/images/anime/11/75274.jpg"
    //         },
    //         {
    //           anime_name: "Nisemonogatari",
    //           image_path: "https://cdn.myanimelist.net/images/anime/1044/103654.jpg"
    //         },
    //         {
    //           anime_name: "Koyomimonogatari",
    //           image_path: "https://cdn.myanimelist.net/images/anime/2/77744.jpg"
    //         },
    //         {
    //           anime_name: "Tsukimonogatari",
    //           image_path: "https://cdn.myanimelist.net/images/anime/6/68259.jpg"
    //         },
    //         {
    //           anime_name: "Owarimonogatari",
    //           image_path: "https://cdn.myanimelist.net/images/anime/8/76479.jpg"
    //         }
    //       ]
    // ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === row_lists.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? row_lists.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const createCarouselItem = (anime_list) => {
      return (
        <CarouselItem
          style={{
            alignItems: 'center',
          }}
          // key={item.id}
          interval={false}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <AnimeCardList animes={anime_list}/>
        </CarouselItem>
      );
    }


    return(
        <Container style={{
          maxWidth: '100%',
          
          // background: 'deepskyblue'
        }}>
          <center><h1 style={{
            color:'white',
            fontFamily: 'Montserrat',
          }}>{title}</h1></center>
            <Carousel activeIndex={activeIndex} contro next={next} previous={previous}>
                {row_lists.map(createCarouselItem)}
                <CarouselControl
                style={{
                  width: "5%",
                }}
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                />
                <CarouselControl
                width="5%"
                direction="next"
                directionText="Next"
                onClickHandler={next}
                />
            </Carousel>
        </Container>
    );
}

export default AnimeCarrousel;