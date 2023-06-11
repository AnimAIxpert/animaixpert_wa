import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import store  from "../../redux/store";
import { getAllRatingsByUserId } from "services/rating-services";
// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  const [anime_list, setAnimeList] = React.useState([]);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  React.useEffect(() => {
    getAllRatingsByUserId(store.getState().user.username).then((ratings) => {
      console.log(ratings);
      setAnimeList(ratings);
    });
  }, []);


  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/profile.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/oreki.jpg")}></img>
          </div>
          <h3 className="title">{store.getState().user.username}</h3>
          <p className="category">{store.getState().user.email}</p>
          <div className="content">
            <div className="social-description">
              <h2>{anime_list.length}</h2>
              <p>Ratings</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
