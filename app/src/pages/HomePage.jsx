import { Card, TextInput, Title, Bold } from "@tremor/react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DegreeContext } from "../components/Layout";
import Loader from "../components/loader/Loader";
import { WeatherDisplay } from "../components/homePage/WeatherDisplay";

export const HomePage = ({ typeDegree }) => {
  const [city, setCity] = useState("paris");
  const [language, setLanguage] = useState("fr");
  const [cityInfo, setCityInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { degreeType, setDegreeType } = useContext(DegreeContext);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setCityInfo(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Une erreur est survenue, veuillez réessayer plus tard.");
      });
  }, []);

  const handleChange = (value) => {
    setCity(value);
  };

  return (
    <div className="homePage-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card className="search-card">
            <Title>Recherchez une ville</Title>
            <TextInput
              icon={RxMagnifyingGlass}
              placeholder="Paris"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </Card>
          <WeatherDisplay cityInfo={cityInfo} />
        </>
      )}
    </div>
  );
};
