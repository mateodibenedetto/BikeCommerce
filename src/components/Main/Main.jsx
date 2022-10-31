import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";
import HeroImg from '../HeroImg/HeroImg' 


const Main = () => {
  const { theme } = useTheme(); 

  const navigate = useNavigate();

  const handleCatalog = () => {
    navigate('/catalog')
  }

  return (
    <div className={`main ${theme}`}>
        <HeroImg/>

        <div className="bigimg-1"></div>

        <div className="section">
          <h3 className="border">Mountain Bikes</h3>
          <p>The best brands and models of mountain bikes, all the best for you, visit our catalog to see more</p>
          <div className="btn-container">
            <button onClick={handleCatalog} className="btn-catalog">Catalog</button>
          </div>
        </div>

        
        <div className="bigimg-2"></div>
        
        <div className="section">
          <h3 className="border">BMX and Urban</h3>
          <p>We also have bmx for those who are extreme and urban for those who like to ride their bikes calmly.</p>
          <div className="btn-container">
            <button onClick={handleCatalog} className="btn-catalog">Catalog</button>
          </div>
        </div>

        <div className="bigimg-3"></div>

    </div>
  )
}

export default Main