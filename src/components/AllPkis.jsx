import React, { useEffect, useState } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteKpiKey, getSavedKpiKeys } from "./utils/axiosInstance";

const AllPkis = () => {
  const [pkis, setPkis] = useState([]);

  const handleDelete = (id) => {
    if (confirm("Sure want to Delete?")) {
      deleteKpiKey(id).then(() => toast.success("Deleted Successfully"));
      setPkis(pkis.filter((pki) => pki.id !== id));
    }
  };

  useEffect(() => {
    getSavedKpiKeys(localStorage.getItem("userId")).then((response) =>
      setPkis(response.data.keys)
    );
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(date);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <h2 className="text-center mb-4">ALL YOUR KEYS</h2>
      <div
        className="container mt-2"
        style={{ height: "50dvh", overflow: "auto" }}
      >
        {pkis.length === 0 ? (
          <h4 className="text-muted">No saved keys</h4>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Public</th>
                <th>Private</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pkis.map((pki) => (
                <tr key={pki.id}>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-public-${pki.id}`}>
                        {pki.publicKey}
                      </Tooltip>
                    }
                  >
                    <td
                      onClick={() => {
                        toast.success("copied successfully");
                        navigator.clipboard.writeText(pki.publicKey);
                      }}
                    >
                      {pki.publicKey.slice(26, 41)}
                    </td>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-private-${pki.id}`}>
                        {pki.privateKey}
                      </Tooltip>
                    }
                  >
                    <td
                      onClick={() => {
                        toast.success("copied successfully");
                        navigator.clipboard.writeText(pki.privateKey);
                      }}
                    >
                      {pki.privateKey.slice(37, 52)}
                    </td>
                  </OverlayTrigger>
                  <td>{formatDate(pki.createdAt)}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(pki.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default AllPkis;
