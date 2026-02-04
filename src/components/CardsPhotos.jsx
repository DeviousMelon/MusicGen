export default function CardsPhotos({ title, image }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
    </div>
  );
}
