import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadResponse = await axios.post(
            "https://api.cloudinary.com/v1_1/de5hvyb1f/image/upload",
            data
          );

          const { url } = uploadResponse.data;
          return url;
        })
      );
      const newHotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post("/hotels", newHotel);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };
  console.log(files);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter nouveau hôtel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  multiple
                  type="file"
                  id="file"
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
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
                <label>En vedette</label>
                <select id="featured" name="featured" onChange={handleChange}>
                  <option value={false}>Non</option>
                  <option value={true}>Oui</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Chambres </label>

                <select
                  id="rooms"
                  name="rooms"
                  multiple
                  onChange={handleSelect}
                >
                  {loading
                    ? "Loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
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
