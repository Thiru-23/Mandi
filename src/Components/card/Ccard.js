import React from "react";
import cropImg from "../../images/cropo.jpg";
import "./Ccard.css";

export const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card alignCard">
            <img src={cropImg} alt="" className="card-img-top " />
            <div className="card-body">
              <h5 className="card-title mb-3">Crop Name</h5>

              <div className="card-text">
                <p>Address:</p>
                <p>Plot No.:</p>
                <p>Market:</p>
                <p>Net weight: 1.2 quintal</p>
                <p>Highest-bid: 500/-</p>
              </div>
              <a href="" className="btn btn-success btn-sm width100 mx-0">
                CHAT
              </a>
              <a href="" className="btn btn-danger btn-sm my-3 width100 mx-0">
                ACCEPT DEAL
              </a>
            </div>
          </div>
        </div>
        <section class="light">
          <div class="container py-2">
            <div class="h1 text-center text-dark" id="pageHeaderTitle">
              My Cards Light
            </div>

            <article class="postcard light green">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://picsum.photos/500/501"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title green">
                  <a href="#">Podcast Title</a>
                </h1>
                <div class="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Podcast
                  </li>
                  <li class="tag__item">
                    <i class="fas fa-clock mr-2"></i>55 mins.
                  </li>
                  <li class="tag__item play green">
                    <a href="#">
                      <i class="fas fa-play mr-2"></i>Play Episode
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
