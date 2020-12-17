import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function Dashboard() {
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger"> {error} </Alert>}
          <h2 className="text-center mb-4">Log Out</h2>
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </>
  );
}
