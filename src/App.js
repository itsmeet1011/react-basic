import "bulma/css/bulma.css";
// in case of import css we do not need to add as a veriavle that why import like this
import ProfileCard from "./profile";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";
// import with relative adderes and with file extainsation name

function App() {
  return (
    <div>
      <div>Personal profile cards</div>

      <div style={{ display: "flex", gap: "50px" }}>
        <ProfileCard title="alexa" handel="@alexa32" img={AlexaImg} />
        <ProfileCard title="catana" handel="@catana92" img={CortanaImg} />
        <ProfileCard title="siri" handel="@sir32" img={SiriImg} />
      </div>
    </div>
  );
}

export default App;
