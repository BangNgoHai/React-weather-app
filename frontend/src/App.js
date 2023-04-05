import { useEffect, useState } from 'react';
import './App.css';
import Display from './Components/Content/Display';
import Searchbar from './Components/Content/Searchbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weathericon, setWeatherIcon] = useState({});
  const [location, setLocation] = useState();
  console.log(location);

  useEffect(()=>{
    const apiKey = "059d911a84bdce22253b943c31d9d18f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    axios.get(apiUrl)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.log(error));
    
    async function getData(){
      const res =  await axios.get("/v1/weathericons");
      return res;
    }
    getData().then((res) => setWeatherIcon(res.data));
    getData().catch((err) => console.log(err));
  },[location]);
  return (
    <div className="App">
      <Header/>
      <Searchbar setLocation={setLocation}/>
      <Display weatherData={weatherData} weathericon={weathericon}/>
      <Footer/>
    </div>
  );
}

export default App;
