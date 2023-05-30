import React, {useState, useEffect} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// import AnimeCard from "components/Cards/AnimeCard.js";
// import AnimeRow from "components/Anime/AnimeRow.js";
import AnimeCarrousel from "components/Anime/AnimeCarrousel";
import AnimeCardList from "components/Anime/AnimeCardList";
import { getAnimeByGenre } from "services";
import AnimeCardComplete from "components/Anime/AnimeCardComplete";

// sections for this page

function Index() {
  const [catalogue, setCatalogue] = useState([]);
  // console.log("initial state: " + anime_list)
  // const genres = ["Action"];
  const genres = ["Action", "Horror", "Romance", "Mistery", "Sports", "Fantasy"]
  useEffect(() => {
    var arr = [];
    var fetchs = [];
    for (var genre of genres) {
      fetchs.push(getAnimeByGenre(genre, 12));
    }
    Promise.all(fetchs).then((values) => {
      setCatalogue(values);
      console.log("catalogue");
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

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main" style={{backgroundColor:"lightcyan"}}>
          {/* <Images /> */}
          {/* <AnimeCard image_path="https://cdn.myanimelist.net/images/anime/1295/106551.jpg" anime_name="Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen"/> */}
          {/* <AnimeRow animes={animes}/> */}
          {catalogue.length != 0  ? catalogue.map( (anime_list, i) => <AnimeCarrousel row_list={anime_list} title={genres[i]} /> ) : "Loading..."}
          {/* <AnimeCarrousel/> */}
          {/* <AnimeCardComplete {...cowboy} /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
