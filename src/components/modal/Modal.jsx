import { useState } from "react";
import "./modal.css";
import { v4 as uuid } from "uuid";

function Modal({ setShowModal, getUserInfo }) {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [from, setFrom] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !firstName || !lastName || !age || !from || !job) {
      setError(true)
      return
    }
    const userInfo = {
      id: uuid(),
      image: image,
      firstName: firstName,
      lastName: lastName,
      age: age,
      from: from,
      job: job,
    };
    getUserInfo(userInfo); setShowModal(false)
  };
  return (
    <>
      <div className="modal__overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <span>{error ? "Please all complated sections !!!" : null}</span>
          <div className="modal__form">
            <label htmlFor="image">Image Url</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="modal__form">
            <label htmlFor="firstName">First Name</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="modal__form">
            <label htmlFor="lastname">Last Name</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="modal__form">
            <label htmlFor="age">Age</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="modal__form">
            <label htmlFor="from">From</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="text"
              id="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="modal__form">
            <label htmlFor="job">Job</label>
            <input
              style={error ? { borderColor: "crimson " } : { borderColor: "gray" }}
              type="text"
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Modal;
