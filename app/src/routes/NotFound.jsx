import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@tremor/react";

export default function NotFound() {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1
        className="text-x"
        style={{
          color: "red",
        }}
      >
        Page non trouvée (404)
      </h1>
      <br />
      <p
        style={{
          color: "red",
        }}
      >
        La page <b>{location.pathname}</b> n'existe pas.
      </p>
      <br />
      <Link to="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
