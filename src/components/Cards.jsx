import "../index.css";
export default function Cards({ title, text, image, href }) {
  return (
    <a href={href} className="card-link">
      <div className="card h-100 text-center">
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </a>
  );
}
