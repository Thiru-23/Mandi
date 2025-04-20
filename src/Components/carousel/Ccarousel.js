import React from 'react'
import './Ccarousel.css';
import kisanMandi from '../../images/Fruit_Mandi_by_PradeepGaurs_Shutterstock-887x592.jpg'
// import famerTalkingOnPhone from '../../images/farmersonCall.webp';
// import lootFarmers from '../../images/lootingFarmers.png';
import bidImg from '../../images/bidding.jpg'
import farmerWithMoney from '../../images/young-indian-farmer-showing-money-talking-mobile-phone-home_75648-2651.webp'
export const  Carousel = ()=> {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={kisanMandi} class="d-block w-100 cimg" alt="..." />
      <div class="carousel-caption d-md-block">
        <h5>Huge Market</h5>
        <p>We have a network of 785 Mandies from all over India for you to choose from</p>
        
        <div className='slider-btn'>
          <button className="btn btn-1 my-3">Our Services</button>
          {/* <button className="btn btn-2">Get a Quote</button> */}
        </div>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={bidImg} class="d-block w-100 cimg" alt="..." />
      <div class="carousel-caption d-md-block">
        <h5>Best Price</h5>
        <p>Transparent bidding mechanism and large market will give farmers best price</p>
        <div className='slider-btn'>
          <button className="btn btn-1 my-3">Our Services</button>
      {/* <button className="btn btn-2">Get a Quote</button> */}
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={farmerWithMoney} class="d-block w-100 cimg" alt="..." />
      <div class="carousel-caption d-md-block">
        <h5>No Middlemen</h5>
        <p>Directly sell your products to the the firms. Now no more fooling the farmers</p>
        <div className='slider-btn'>
          <button className="btn btn-1 my-3">Our Services</button>
          {/* <button className="btn btn-2">Get a Quote</button> */}
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
