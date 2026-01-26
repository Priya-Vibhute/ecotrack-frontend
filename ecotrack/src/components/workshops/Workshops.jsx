import WorkshopCard from "./WorkshopCard";

function Workshops() {
  const workshops = [
    {
      id: 1,
      name: "Eco Living Workshop",
      description: "Learn sustainable living practices.",
      price: 999,
      duration: 3,
      image: "https://via.placeholder.com/400x250",
      venue: "Mumbai",
      startDate: "2026-02-01T10:00:00"
    },
    {
      id: 2,
      name: "Zero Waste Training",
      description: "Reduce waste and live eco-friendly.",
      price: 1499,
      duration: 5,
      image: "https://via.placeholder.com/400x250",
      venue: "Pune",
      startDate: "2026-02-10T09:30:00"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Workshops</h2>

      <div className="row g-4">
        {workshops.map(workshop => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={workshop.id}>
            <WorkshopCard workshop={workshop} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workshops;
