import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";

function AddWorkshop() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("venue", data.venue);
    formData.append("startDate", data.startDate);
    formData.append("image", data.image[0]);

    try{
    const response=await api.post("/workshops", {...data, image: ""});
    console.log("API Response:", response);
    toast.success("Workshop added successfully!");
    }catch(error){
      console.error("API Error:", error);
      toast.error("Failed to add workshop. Please try again.");
    }


    console.log("Form Data:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    alert("Workshop added successfully ✅");
    navigate("/admin/workshops");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">Add New Workshop</h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                {/* Workshop Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Workshop Name</label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Enter workshop name"
                    {...register("name", { required: "Name is required" })}
                  />
                  <div className="invalid-feedback">
                    {errors.name?.message}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    rows="3"
                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                    placeholder="Brief workshop description"
                    {...register("description", { required: "Description is required" })}
                  />
                </div>

                {/* Price & Duration */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Price (₹)</label>
                    <input
                      type="number"
                      className={`form-control ${errors.price ? "is-invalid" : ""}`}
                      placeholder="e.g. 999"
                      {...register("price", { required: true })}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Duration (days)</label>
                    <input
                      type="number"
                      className={`form-control ${errors.duration ? "is-invalid" : ""}`}
                      placeholder="e.g. 3"
                      {...register("duration", { required: true })}
                    />
                  </div>
                </div>

                {/* Venue */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Venue</label>
                  <input
                    className={`form-control ${errors.venue ? "is-invalid" : ""}`}
                    placeholder="City / Location"
                    {...register("venue", { required: true })}
                  />
                </div>

                {/* Start Date */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Start Date & Time</label>
                  <input
                    type="datetime-local"
                    className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
                    {...register("startDate", { required: true })}
                  />
                </div>

                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Workshop Image</label>
                  <input
                    type="file"
                    className={`form-control ${errors.image ? "is-invalid" : ""}`}
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                  />
                  <div className="invalid-feedback">
                    {errors.image?.message}
                  </div>
                  <small className="text-muted">
                    Upload a clear workshop banner image
                  </small>
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Add Workshop
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/workshops")}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorkshop;
