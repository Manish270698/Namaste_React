import searchIcon from "../images/searchIcon.png";

const Shimmer = () => {
  return (
    <div>
      <div>
        <div className="searchBar">
          {/* Whenever the state varibale changes, React re-renders the whole component. But only the chnaged part is updated */}
          <input id="search" type="search" />
          <button className="search-button">
            <img className="icon" src={searchIcon} alt="search icon" />
          </button>
        </div>
        <div>
          <button className="top-btn">Top Rated Restaurants</button>
        </div>
      </div>

      <div className="Shimmer-container">
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
        <div className="shimmer shimmer-box">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer shimmer-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
