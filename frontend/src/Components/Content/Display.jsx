import React from 'react'
import './display.css'

const Display = (props) => {
    const { weatherData } = props
    const { weathericon } = props
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date()
    const day = days[today.getDay()]
    const month = months[today.getMonth()]

    const weatherConditionCode = weatherData?.weather[0].icon
    const weatherInfo = weathericon[weatherConditionCode]

    const weatherIcon = weatherInfo?.imgSrc

    return (
      <div className="flex flex-row justify-center mt-[50px] h-[350px] w-[70%] bg-white border-2 shadow-2xl">
          <div className="img">
              <img src={weatherIcon} alt=""/>
          </div>
          <div className="information">
              <h2 className="deg"
                  style={{ fontSize: '60px', marginBottom: '10px' }}>{Math.floor(weatherData.main.temp - 273)}°</h2>
              <p className="desc" style={{ fontSize: '30px', marginBottom: '10px' }}>{weatherData.weather[0].description}</p>
              <h4 className="date">{day} , {month} {new Date().getDate()}</h4>
          </div>
      </div>
    )
}

export default Display
