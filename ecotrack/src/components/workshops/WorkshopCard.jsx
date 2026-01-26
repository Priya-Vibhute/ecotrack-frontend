function WorkshopCard({ workshop }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={workshop.image}
        className="card-img-top"
        alt={workshop.name}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{workshop.name}</h5>

        <p className="card-text text-muted">
          {workshop.description}
        </p>

        <p className="mb-1">
          <strong>Venue:</strong> {workshop.venue}
        </p>

        <p className="mb-1">
          <strong>Duration:</strong>{" "}
          <span className="badge bg-success">
            {workshop.duration} days
          </span>
        </p>

        <p className="mb-2">
          <strong>Start Date:</strong>{" "}
          {new Date(workshop.startDate).toLocaleString()}
        </p>

        <h6 className="text-success">₹{workshop.price}</h6>
      </div>

      <div className="card-footer bg-white border-0">
        <button className="btn btn-success w-100">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default WorkshopCard;
