export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "Utilisateur",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "country",
    headerName: "Pays",
    width: 100,
  },
  {
    field: "city",
    headerName: "Ville",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Nom",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },

  {
    field: "title",
    headerName: "Titre",
    width: 200,
  },
  {
    field: "city",
    headerName: "Ville",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Titre",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },

  {
    field: "price",
    headerName: "Prix",
    width: 100,
    renderCell: (params) => {
      return params.row.price;
    },
  },
  {
    field: "maxPeople",
    headerName: "Nbre de personnes",
    width: 100,
  },
];
