import { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <Fragment>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos} alt="" className="fpImg" />

              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">À partir de {item.cheapestPrice}€</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default FeaturedProperties;
