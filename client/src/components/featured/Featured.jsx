import { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "hotels/countbycity?cities=dakar,saly,cap-skirring"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading... please wait!"
      ) : (
        <Fragment>
          <div className="featuredItem">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/11/d6/38/9b/exterior.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>dakar</h1>
              <h2>{data[0]} propriétés</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://arbiterz.com/wp-content/uploads/2020/02/1-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>saly</h1>
              <h2>{data[1]} propriétés</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tourmag.com/photo/art/grande/42042572-35173777.jpg?v=1579694905"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>cap skirring</h1>
              <h2>{data[2]} propriétés</h2>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Featured;
