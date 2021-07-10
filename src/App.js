import React, { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core';
import InfoBox from './InfoBox';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries?yesterday=-&twoDaysAgo=-&sort=-&allowNull=-")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2,
          }
        ));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      })
    }

    getCountriesData();
  }, []);

  const onCountryChange = async(event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === 'worldwide' 
    ? 'https://disease.sh/v3/covid-19/all' 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(response => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
  };

  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
      <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
        <Select
          className="app__dropdown"
          variant="outlined"
          onChange={onCountryChange}
          value={country}
        >
          
          <MenuItem  value="worldwide">Worldwide</MenuItem>
          {
            countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      </div>
      
      <div className="app__stats">
        <InfoBox 
        className="app__infoBox"
        title="Coronavirus Cases" 
        cases={countryInfo.todayCases}
        total={countryInfo.cases}
        />

        <InfoBox 
        title="Recovered" 
        cases={countryInfo.todayRecovered} 
        total={countryInfo.recovered}
        />

        <InfoBox 
        title="Deaths" 
        cases={countryInfo.todayDeaths} 
        total={countryInfo.deaths}
        />
      </div>

      <h5 className="app__statswarning">The today cases data of some 
        country may be zero due to the
        non updated value of today's data
        in the respective time zones</h5>

        <img 
        className="app__image"
        src="https://media1.tenor.com/images/ed7cffc243c6a6ffe63058e79d1ea0ac/tenor.gif?itemid=16735375"
        alt=""
        />

      {/* <Map /> */}
    </div>

    <Card className="app__right">
      <CardContent>
        <h3>Live cases by country</h3>
        <Table  countries={tableData} />
        <h3 classType="app__graphheading">Worldwide new cases</h3>
        <LineGraph />
      </CardContent>
    </Card>
    </div>
  );
}

export default App;
