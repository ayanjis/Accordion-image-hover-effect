import React from 'react'
import './Accordion.css'
import marina_bay from '../../assets/marina-bay.jpg'
import taj_mahal from '../../assets/taj-mahal.jpg'
import fuji_mountain from '../../assets/fuji-mountain.jpg'
import statue_liberty from '../../assets/statue-liberty.jpg'
import great_wall from '../../assets/great-wall.jpg'

function Accordion() {
  return (
    <main className='main'>
        <div className="card">
            <img src={marina_bay} className="image"/>
            <img src={marina_bay} className="background"/>
            <div className="layer">
                <div className="info">
                    <h1>Taj Mahal</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, placeat.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <img src={taj_mahal} className="image"/>
            <img src={taj_mahal} className="background"/>
            <div className="layer">
                <div className="info">
                    <h1>Marina Bay</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, placeat.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <img src={fuji_mountain} className="image"/>
            <img src={fuji_mountain} className="background"/>
            <div className="layer">
                <div className="info">
                    <h1>Great Wall</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, placeat.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <img src={statue_liberty} className="image"/>
            <img src={statue_liberty} className="background"/>
            <div className="layer">
                <div className="info">
                    <h1>Statue Liberty</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, placeat.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <img src={great_wall} className="image"/>
            <img src={great_wall} className="background"/>
            <div className="layer">
                <div className="info">
                    <h1>Fuji Mountain</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, placeat.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
export default Accordion
