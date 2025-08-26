import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";

// step 1 : npm i axios
// step 2 : import axios from 'axios';
import axios from "axios";
import { initialState } from "../L3_hooks/reducer/ShoppingReducer";
import InvitationForm from "./InvitationForm";
import { invitationAPIEndpoint as apiEndpoint } from "./APIs";
const InvitationApp = () => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    console.log("useEffect has been executed!");
    fetchAllInvitations();
  }, []);

  const fetchAllInvitations = async () => {
    // step 3: create http request
    console.log("### starting to fetch invitations...");
    // http request - GET
    await axios
      .get(apiEndpoint)
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          setInvitations(response.data);
        } else {
          console.log("Unexpected reponse status:", response.status);
        }
      })
      .catch((error) => {
        console.log("Unexpected occured during API call");
      });
    console.log("### finished fetching invitations.");
  };

  const updateInvitationStatus = async (id, newStatus) => {
    try {
      // http://localhost:8080/api/invitations  /1  ?status=  accepted
      const response = await axios.put(
        `${apiEndpoint}/${id}?status=${newStatus}`
      );
      if (response.status === 204) {
        console.log("Invitation status updated successfully.");
        fetchAllInvitations();
      } else {
        console.log("Unexpected reponse status:", response.status);
      }
    } catch (error) {
      console.log("Unexpected occured during API call");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Invitations</h2>
      {/* Alert area */}
      <div
        className={`alert alert-success d-flex justify-content-between align-items-center`}
        role="alert"
      >
        <div>Alert Message</div>
        <button type="button" className="btn-close" aria-label="Close" />
      </div>

      {/* Add Invitation Form */}
      <InvitationForm fetchAllInvitations={fetchAllInvitations} />

      {/* Invitations Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Invitation</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((invitation) => (
            <tr key={invitation.id}>
              <td>{invitation.id}</td>
              <td>{invitation.title}</td>
              <td>{invitation.date}</td>
              <td>{invitation.time}</td>
              <td>{invitation.location}</td>
              <td>
                <span
                  className={`badge ${
                    invitation.status === "accepted"
                      ? "bg-success"
                      : invitation.status === "declined"
                      ? "bg-danger"
                      : "bg-warning text-dark"
                  } `}
                >
                  {invitation.status}
                </span>
              </td>
              <td>
                {invitation.status === "pending" && (
                  <>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() =>
                        updateInvitationStatus(invitation.id, "accepted")
                      }
                    >
                      <FaCheck /> Accept
                    </button>
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() =>
                        updateInvitationStatus(invitation.id, "declined")
                      }
                    >
                      <FaTimes /> Decline
                    </button>
                  </>
                )}
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => console.log("remove operation")}
                >
                  <FaTrash /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitationApp;
