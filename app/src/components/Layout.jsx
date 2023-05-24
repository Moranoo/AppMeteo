import { useEffect, useState, createContext } from "react";
import { Toggle, ToggleItem } from "@tremor/react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

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
        <header className="text-3xl">
          <Toggle
            color="zinc"
            defaultValue="1"
            onValueChange={(value) => console.log(value)}
          >
            <ToggleItem value="1" icon={TbTemperatureCelsius} />
            <ToggleItem value="2" icon={TbTemperatureFahrenheit} />
          </Toggle>

        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </DegreeContext.Provider>
  );
};
