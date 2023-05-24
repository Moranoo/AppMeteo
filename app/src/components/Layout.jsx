import { useEffect, useState, createContext } from "react";

export const DegreeContext = createContext();

export const Layout = ({ children }) => {
  const [degreeType, setDegreeType] = useState("");

  return (
    <DegreeContext.Provider value={{ degreeType, setDegreeType }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          alignItems: "center",
          width: "100%",
        }}
      >
        <header className="text-3xl"></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </DegreeContext.Provider>
  );
};
