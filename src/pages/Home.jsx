import '../App.css'
import HeroCarousel from '../components/HeroCarousel';
import Cards from '../components/Cards';

export default function Home() {
  return (
  <>
    <HeroCarousel />
     <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <Cards
              title="Current Programmes"
              text="Explore our current music programmes."
              image="/card1.jpg"
            />
          </div>

          <div className="col-md-4">
            <Cards
              title="Studios"
              text="Access professional studio spaces."
              image="/card2.jpg"
            />
          </div>

          <div className="col-md-4">
            <Cards
              title="Tutors"
              text="Learn from experienced music tutors."
              image="/card3.jpg"
            />
          </div>
        </div>
      </section>
  </>
  );
}
