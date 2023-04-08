import { useEffect, useState } from 'react'
import Display from './Components/Content/Display'
import Searchbar from './Components/Content/Searchbar'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import axios from 'axios'

function App () {
  const [weatherData, setWeatherData] = useState(null)
  const [weathericon, setWeatherIcon] = useState({})
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('Leipzig')
  console.log(location)

  useEffect(() => {
    if (location) {
      const apiKey = '059d911a84bdce22253b943c31d9d18f'
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      setError(null)
      axios.get(apiUrl)
        .then((response) => {
            setWeatherData(response.data)
          }
        )
        .catch(
          (error) => setError(error)
        )
    }

    async function getData () {
      const res = await axios.get('/v1/weathericons')
      return res
    }

    getData().then((res) => setWeatherIcon(res.data))
    getData().catch((err) => console.log(err))
  }, [location])

  return (
    <div className="App">
      <Header/>
      <div className="flex flex-col p-16 h-[100%]">
        <div>
          <Searchbar location={location} setLocation={setLocation}/>
          {error ? <>
            <h1>Something went wrong...</h1>
            <p>{error.toString()}</p>
          </> : null}
          {weatherData ? <div className="flex flex-row justify-center">
            <Display weatherData={weatherData} weathericon={weathericon}/>
          </div> : location ? <h1>Loading...</h1> : <h1>Enter your location</h1>}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
