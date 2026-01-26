function AdminWorkshops() {

  const workshops = [
    {
      id: 1,
      name: "Eco Living Workshop",
      price: 999,
      duration: 3,
      venue: "Mumbai",
      startDate: "2026-02-01T10:00:00"
    },
    {
      id: 2,
      name: "Zero Waste Training",
      price: 1499,
      duration: 5,
      venue: "Pune",
      startDate: "2026-02-10T09:30:00"
    }
  ];

  const handleViewEnrollments = (workshopId) => {
    console.log("View enrollments for workshop:", workshopId);
    // later → navigate(`/admin/workshops/${workshopId}/enrollments`)
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Manage Workshops</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Venue</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {workshops.map((w, index) => (
              <tr key={w.id}>
                <td>{index + 1}</td>
                <td>{w.name}</td>
                <td>{w.venue}</td>
                <td>{w.duration} days</td>
                <td>{new Date(w.startDate).toLocaleString()}</td>
                <td>₹{w.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleViewEnrollments(w.id)}
                  >
                    See Enrollments
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default AdminWorkshops;
