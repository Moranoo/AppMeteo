import { useEffect, useState, createContext } from "react";
import { Toggle, ToggleItem, Title } from "@tremor/react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

export const DegreeContext = createContext();

export const Layout = ({ children }) => {
  const [degreeType, setDegreeType] = useState("metric");

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
        <header
          className="text-3xl"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            gap: "20px",
          }}
        >
          <Title>Application météo</Title>
          <Toggle
            color="zinc"
            defaultValue={degreeType}
            onValueChange={(value) => {
              setDegreeType(value);
            }}
          >
            <ToggleItem value="metric" icon={TbTemperatureCelsius} />
            <ToggleItem value="imperial" icon={TbTemperatureFahrenheit} />
          </Toggle>
        </header>
        <main
          style={{
            width: "100%",
          }}
        >
          {children}
        </main>
        <footer></footer>
      </div>
    </DegreeContext.Provider>
  );
};

