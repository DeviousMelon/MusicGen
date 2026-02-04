import CardsPhotos from "../components/CardsPhotos";
import CardsNoLink from "../components/CardsNoLink";
import "../index.css";

export default function Studio() {
  return (
    <div className="studio-wrap">
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-lg-4 d-flex flex-column gap-4">
            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card1.jpg"
              />
            </div>

            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card2.jpg"
              />
            </div>

            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card3.jpg"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="studio-panel studio-panel-lg">
              <CardsNoLink
                title=" "
                text=" "
                image="/card2.jpg"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-lg-4">
            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card1.jpg"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card3.jpg"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="studio-panel studio-panel-sm">
              <CardsPhotos
                title=" "
                image="/card2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
