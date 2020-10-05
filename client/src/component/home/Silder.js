import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Img1 from "../assets/img1.jpg";
// import Img2 from "../assets/img2.jpg";
// import Img3 from "../assets/img3.jpg";
import "./Slider.css";

function Silder() {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img
            alt=""
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Ovs_905AZOZal5BhmLGjVC6Crv9yve-a2w&usqp=CAU"
            }
          />
          {/* <p className="legend">Photo 1 desc</p> */}
        </div>
        <div>
          <img
            alt=""
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Ovs_905AZOZal5BhmLGjVC6Crv9yve-a2w&usqp=CAU"
            }
          />
          {/* <p className="legend">Photo 2 desc</p> */}
        </div>
        <div>
          <img
            alt=""
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Ovs_905AZOZal5BhmLGjVC6Crv9yve-a2w&usqp=CAU"
            }
          />
          {/* <p className="legend">Photo 3 desc</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Silder;
