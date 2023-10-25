import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {
  const [info, setInfo] = useState({});
  const [hotelid, setHotelid] = useState("");
  const [rooms, setRooms] = useState([]);
  const { data, loading } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    console.log(roomNumbers);
    try {
      await axios.post(`/rooms/${hotelid}`, { ...info, roomNumbers });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter nouvelle chambre</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    placeholdertype={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Chambres</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Placer la virgule aprés chaque numéro de chambres"
                />
              </div>
              <div className="formInput">
                <label>Choisir un hotel</label>
                <select
                  id="hotelid"
                  onChange={(e) => setHotelid(e.target.value)}
                >
                  {loading
                    ? "Loading!..."
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>

              <button onClick={handleClick}>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
