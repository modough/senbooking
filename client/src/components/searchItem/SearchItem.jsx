import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance"> à {item.distance}m du centre ville</span>
        <span className="siTaxiOp">Taxi aéroportuaire gratuit</span>
        <span className="siSubtitle">Studio avec Air conditionné</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Annulation gratuite </span>
        <span className="siCancelOpSubtitle">
          Vous pouvez annuler plus tard, alors ne ratez pas ce prix imbattable!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Taxes incluses</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Voir disponibilités</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
