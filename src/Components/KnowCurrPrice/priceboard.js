import React from 'react'
import blackboardImg from '../../images/blackboard(1)(1).jpg'
import './priceboard.css'
import crop from '../../images/cropo.jpg';

const LatestPrice = () => {
  return (
    <div className="container">
      <div className='board'>
        <img src={blackboardImg} className="blackboard" alt="" />
        <div className='boardContent'>
          <h3 className='boardContent-heading'>Dhar Mandi (Wheat)</h3>
          <div className='d-flex giveGap justify-content-evenly cropInfo align-items-center'>
            <img src={crop} className='cropImg' alt="" />
            <div className='cropPriceInfo'>
              <p>Highest price: 500/-</p>
              <p>Lowest price: 200/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LatestPrice }
