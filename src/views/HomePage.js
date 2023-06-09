import React, {useState, useEffect} from "react";

// reactstrap components
import {
  Row
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// import AnimeCard from "components/Cards/AnimeCard.js";
// import AnimeRow from "components/Anime/AnimeRow.js";
import AnimeCarrousel from "components/Anime/AnimeCarrousel";
import AnimeCardList from "components/Anime/AnimeCardList";
import { getAnimeByGenre, getTopAnimeByGenre } from "services";
import AnimeCardComplete from "components/Anime/AnimeCardComplete";

// sections for this page

function Index() {
  const [catalogue, setCatalogue] = useState([]);
  // console.log("initial state: " + anime_list)
  // const genres = ["Action"];
  // useEffect(() => {
  //   document.body.classList.add("index-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("index-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  const genres = ["Action", "Horror", "Romance", "Mistery", "Sports", "Fantasy"]
  useEffect(() => {
    var fetchs = [];
    for (var genre of genres) {
      fetchs.push(getTopAnimeByGenre(genre, 12));
    }
    // console.log(fetchs);
    Promise.all(fetchs).then((values) => {
      console.log("catalogue");
      setCatalogue(values);
      console.log(catalogue);
    });
    // var actions = [for (genre of genres) (row) => {arr.push(row)}];
    // getAnimeByGenre("Action", 12).then((row_list) => {
    //   // setCatalogue(catalogue.concat([row_list]));
    //   arr.push(row_list);
    //   console.log(row_list);
    // });

    // getAnimeByGenre("Horror", 12).then((row_list) => {
    //   // setCatalogue(catalogue.concat([row_list]));
    //   arr.push(row_list);
    //   console.log(row_list);
    // });
    // console.log(arr);

  }, []);

  const createCarrousel = (anime_list,i) => {
    return (
      <Row>
        <AnimeCarrousel row_list={anime_list} title={genres[i]} />
      </Row>
    )
  }

  return (
    <>
      <ExamplesNavbar />
        {/* <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/home.jpg") + ")"
            }}
            ></div>
        </div>
          <div className="wrapper" >
          <div className="main" > */}
          <div className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/home.jpg") + ")"
            }}>
            
            {catalogue.length !== 0  ? catalogue.map( (anime_list, i) => createCarrousel(anime_list, i)) : "Loading..."}
            
          <DarkFooter />
          </div>
          {/* </div> */}
          {/* </div> */}
        
    </>
  );
}

export default Index;
