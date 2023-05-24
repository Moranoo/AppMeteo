import { Bold, Card, Title, Text } from "@tremor/react";

//Convertie l'heure reçu par l'API en heure normale fr
function unixToHHMM(unixTimestamp) {
  let date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  // Format to HHhMM
  let time = hours + "h" + minutes.substr(-2);
  return time;
}

export const WeatherDisplay = ({ cityInfo, degreeType }) => {
  return (
    <>
      <Card
        className="weather-card"
        style={{
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              marginRight: "5px",
            }}
            className="text-2xl"
          >
            {cityInfo.name}
          </Title>
          <Text className="text-2xl">({cityInfo.weather[0].description})</Text>
        </div>
        <br />
        <Bold className="text-2xl">Info : </Bold>
        <br />
        <div className="info-container">
          <div>
            <ul>
              <li>Pays : {cityInfo.sys.country}</li>
              <li>Levé du soleil : {unixToHHMM(cityInfo.sys.sunrise)}</li>
              <li>Couché de soleil : {unixToHHMM(cityInfo.sys.sunset)}</li>
            </ul>
          </div>
          <div
            className="temp-container"
            style={{
              width: "30%",
            }}
          >
            <ul>
              <li>Température : {cityInfo?.main.temp}°</li>
              <li>Ressenti : {cityInfo?.main.feels_like}°</li>
              <li>Minimum : {cityInfo?.main.temp_min}°</li>
              <li>Maximum : {cityInfo?.main.temp_max}°</li>
              <li>Humidité : {cityInfo?.main.humidity} %</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};
