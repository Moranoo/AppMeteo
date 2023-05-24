import { Bold, Card, Title, Text } from "@tremor/react";

export const WeatherDisplay = ({ cityInfo }) => {
  return (
    <>
      <Card className="weather-card">
        <Title>{cityInfo.name}</Title>
        <br />
        <Bold>Info : </Bold>
        <div className="info-container">
          <div>
            <Text>
              <ul>
                <li>Pays : {cityInfo.sys.country}</li>
              </ul>
            </Text>
          </div>
          <div></div>
        </div>
      </Card>
    </>
  );
};
