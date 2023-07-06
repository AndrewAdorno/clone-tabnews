import React from "react";

function Home() {
  const [isAccepted, setIsAccepted] = React.useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      {isAccepted ? <Simbora /> : <Invitation setIsAccepted={setIsAccepted} />}
    </div>
  );
}

export default Home;

function Invitation({ setIsAccepted }) {
  const [rejectButtonPosition, setRejectButtonPosition] = React.useState(false);

  function handleReject() {
    setRejectButtonPosition((old) => !old);
  }

  function handleAccept() {
    setIsAccepted(true);
  }

  return (
    <>
      <h1>Convite Especial</h1>
      <h2>Amorzinho da minha vida, Bora pra praia? s2</h2>

      <img src="https://lh3.googleusercontent.com/h_bcmzTE2T0mQ-5kysgk-Vla4Y13rNhVZ2xBw6yow3tMwMHroX3LUUPKgTYyx4wQw2rTXR9xrF991B_Ctrd7TVZoibo=w640-h400-e365-rj-sc0x00ffffff" />

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          width: "80px",
        }}
      >
        <button onClick={handleAccept}>Sim</button>
        <button
          style={{ marginLeft: rejectButtonPosition ? "50px" : "5px" }}
          onClick={handleReject}
          onMouseOver={handleReject}
        >
          Não
        </button>
      </div>
    </>
  );
}

function Simbora() {
  return (
    <>
      <h1>Ebaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>

      <img src="https://gifdb.com/images/high/on-my-way-running-on-beach-d7lfx56afj2bzn1j.webp" />
    </>
  );
}
