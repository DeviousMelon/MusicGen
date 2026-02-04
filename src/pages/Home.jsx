import '../App.css'
import HeroCarousel from '../components/HeroCarousel';
import Cards from '../components/Cards';
import cardOne from "../assets/cardOne.jpg";
import cardTwo from "../assets/cardTwo.jpg";

export default function Home() {
  return (
  <>
    <HeroCarousel />
     <section className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-sm-10 col-md-5 col-lg-4">
            <Cards
              href="/studio"
              title="Studio"
              text="Hello"
              image={cardOne}
            />
          </div>

          <div className="col-sm-10 col-md-5 col-lg-4">
            <Cards
              href="tutors"
              title="Tutors"
              text="Learn from experienced music tutors."
              image={cardTwo}
            />
          </div>
        </div>
      </section>
  </>
  );
}
