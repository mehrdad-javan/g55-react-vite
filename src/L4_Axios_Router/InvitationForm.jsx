import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { invitationAPIEndpoint as apiEndpoint } from "./APIs";

const InvitationForm = ({fetchAllInvitations}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      time: "",
      location: "",
      status: "pending",
    },
  });

  const onSubmit = async (data) => {
    console.log("DATA:", data);
    try {
      const response = await axios.post(apiEndpoint, data);
      if (response.status === 201) {
        reset();
        console.log("Invitation created successfully.");
        fetchAllInvitations();
      }
    } catch (error) {
      console.error("Error creating invitation:", error);
    }
  };
  return (
    <div className="mb-4">
      <h4>Create a New Invitation</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="date"
            className={`form-control ${errors.date ? "is-invalid" : ""}`}
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && (
            <div className="invalid-feedback">{errors.date.message}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="time"
            className={`form-control ${errors.time ? "is-invalid" : ""}`}
            {...register("time", {
              required: "Time is required",
            })}
          />
          {errors.time && (
            <div className="invalid-feedback">{errors.time.message}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.location ? "is-invalid" : ""}`}
            placeholder="Location"
            {...register("location", {
              required: "Location is required",
              minLength: {
                value: 3,
                message: "Location must be at least 3 characters",
              },
            })}
          />
          {errors.location && (
            <div className="invalid-feedback">{errors.location.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Add Invitation
        </button>
      </form>
    </div>
  );
};

export default InvitationForm;
