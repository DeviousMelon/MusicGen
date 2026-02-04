import "../index.css";
import heroOne from "../assets/heroOne.jpg";
import heroTwo from "../assets/heroTwo.jpg";
import heroThree from "../assets/heroThree.jpg";
export default function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={heroOne}
            className="d-block w-100 hero-img"
            alt="Hero slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Music Generation</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={heroTwo}
            className="d-block w-100 hero-img"
            alt="Hero slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={heroThree}
            className="d-block w-100 hero-img"
            alt="Hero slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
        aria-label="Next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
      <div className="scroll-indicator-left">⌄</div>
      <div className="scroll-indicator-right">⌄</div>
    </div>
  );
}