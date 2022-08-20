import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Gagnez du temps et de l'argent!</h1>
      <span className="mailDesc">
        Inscrivez-vous et nous vous proposerons les meilleures offres
        disponibles
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Votre Email" />
        <button>Souscrire</button>
      </div>
    </div>
  );
};

export default MailList;
