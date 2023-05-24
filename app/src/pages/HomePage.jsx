import { Card, TextInput, Title, Bold } from "@tremor/react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DegreeContext } from "../components/Layout";
import Loader from "../components/loader/Loader";
import { WeatherDisplay } from "../components/homePage/WeatherDisplay";
import { debounce } from "lodash";

export const HomePage = () => {
  const [city, setCity] = useState("paris");
  const [language, setLanguage] = useState("fr");
  const [cityInfo, setCityInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [units, setUnits] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  const debouncedSetCity = useCallback(
    debounce((value) => setCity(value), 1000),
    [] // empty dependencies array ensures this is only run once
  );

  const { degreeType, setDegreeType } = useContext(DegreeContext);

  useEffect(() => {
    return () => {
      if (degreeType === "celsius") {
        setUnits("metric");
      } else if (degreeType === "fahrenheit") {
        setUnits("imperial");
      } else if (degreeType === "kelvin") {
        setUnits("standard");
      }
    };
  }, []);

  useEffect(() => {
    console.log(city);
    if (city) {
      // Check if city is not empty
      setIsLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${language}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setNotFound(false);
          setCityInfo(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setIsLoading(false);
            setNotFound(true);
          } else {
            console.error(error);
            toast.error(
              "Une erreur est survenue, veuillez réessayer plus tard."
            );
          }
        });
    }
  }, [city]);

  useEffect(() => {
    return () => {
      debouncedSetCity.cancel();
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
    debouncedSetCity(e.target.value.toLowerCase());
  };

  return (
    <div className="homePage-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card
            className="search-card"
            style={{
              width: "50%",
            }}
          >
            <Title>Recherchez une ville</Title>
            <TextInput
              icon={RxMagnifyingGlass}
              placeholder="Paris"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Card>
          {notFound ? (
            <Card>
              <Title>Aucune ville trouvée au nom de {city}</Title>
            </Card>
          ) : (
            <WeatherDisplay cityInfo={cityInfo} degreeType={degreeType} />
          )}
        </>
      )}
    </div>
  );
};
