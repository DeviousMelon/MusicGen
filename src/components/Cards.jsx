export default function Cards({ title, text, image }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary mt-auto">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
