import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Popover } from "bootstrap";
import { generateKpiKeys, saveKpiKeys } from "./utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const GeneratePki = () => {
  const navigate = useNavigate();
  const [secret, setSecret] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new Popover(popoverTriggerEl);
    });
  }, []);

  const generate = async () => {
    setLoading(true);
    try {
      const { data } = await generateKpiKeys({
        secret: text,
        userId: localStorage.getItem("userId"),
      });
      setSecret({ publicKey: data.publicKey, privateKey: data.privateKey });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setLoading(false);
  };

  const save = async () => {
    try {
      await saveKpiKeys({
        userId: localStorage.getItem("userId"),
        publicKey: secret.publicKey,
        privateKey: secret.privateKey,
      });
      toast.success("Saved successfully");
      navigate("/home/new");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="secret w-100 d-flex justify-content-around align-items-center">
        <p className="my-1">Add your Secret</p>
        <input
          type="text"
          name="secret"
          id="secret"
          onChange={(e) => setText(e.target.value)}
          placeholder="secret"
        />
      </div>
      <div className="w-100 text-end">
        <Button
          onClick={generate}
          className="btn-success my-3 mx-3 outline-none"
        >
          {loading ? "Generating... " : "Generate"}
        </Button>
      </div>

      <div className="keys-container text-center">
        <h3 className="mx-5">Below Are your Public and Private Keys</h3>
        <div className="keys d-flex justify-content-around my-4">
          <div
            className="public border border-primary shadow-lg p-3 mb-5 bg-white rounded"
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-placement="left"
            data-bs-content={secret?.publicKey.slice(26)}
            onClick={() => {
              toast.success("Copied successfully");
              navigator.clipboard.writeText(secret?.publicKey);
            }}
          >
            {secret?.publicKey && `${secret?.publicKey.slice(26, 150)}...`}
          </div>
          <div
            className="private border border-dark shadow-lg p-3 mb-5 bg-white rounded"
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-placement="right"
            data-bs-content={secret?.privateKey}
            onClick={() => {
              toast.success("Copied successfully");
              navigator.clipboard.writeText(secret?.privateKey);
            }}
          >
            {secret?.privateKey && `${secret?.privateKey.slice(37, 161)}...`}
          </div>
        </div>
        {secret && (
          <div className="save d-flex justify-content-around align-items-center my-2">
            <span>Do you want to save your keys for future reference?</span>
            <Button onClick={save} className="btn-success saveBtn">
              Yes
            </Button>
            <Button
              onClick={() => navigate("/home/new")}
              className="btn-danger saveBtn"
            >
              No
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default GeneratePki;
