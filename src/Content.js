import { useState } from "react";
import "./styles.css";
const Content = () => {
  const [jobs, setJobs] = useState(() => {
    const item = localStorage.getItem("jobs");
    return JSON.parse(item) || [];
  });
  const [job, setJob] = useState("");
  const handleAdd = () => {
    if (job !== "") {
      setJobs((pre) => {
        const newJobs = JSON.stringify([...pre, job]);
        localStorage.setItem("jobs", newJobs);
        return [...pre, job];
      });
      setJob("");
    }
  };
  const handleDelete = (id) => {
    setJobs((pre) => {
      const newDelete = pre.filter((item, index) => index !== id);
      const json = JSON.stringify(newDelete);
      localStorage.setItem("jobs", json);
      return newDelete;
    });
  };

  return (
    <div className="wrapper" style={{ marginTop: "30px" }}>
      <h1 className="todolist__title">To-Do List</h1>
      <div className="todolist__form">
        <input
          type="text"
          className="todolist__input"
          placeholder="Add your job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button className="todolist__btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="todolist__table">
        <ul className="todolist__ul">
          {jobs.map((item, index) => (
            <li className="todolist__li" key={index}>
              <span className="todolist__text">{item}</span>
              <span
                style={{ fontSize: "12px" }}
                onClick={() => handleDelete(index)}
              >
                &#10005;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Content;
