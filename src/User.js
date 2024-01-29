import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./User.css";
function User() {
  const [data, setData] = useState(null);
  const [btn1, setBtn1] = useState(null);

  const fetchedData = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${btn1}`);
      console.log("Data received:", response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data", data);
    }
  };
  const handleClick = () => {
    if (btn1 === "1" || btn1 === "2" || btn1 === "3") {
      fetchedData();
    } else {
      alert("Failed to fetch data");
    }
  };
  useEffect(() => {
    handleClick();
  }, [btn1]);
  return (
    <>
      <div>
        {data ? (
          <>
            <div className="order">
              <ul>
                <li>Email:{data.email}</li>
                <li>Name:{data._first_name + " " + data.last_name}</li>
              </ul>
            </div>
            <div>
              <img
                className="img1"
                src={data.avatar}
                alt="an placeholder img"
              />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="btn" onClick={() => setBtn1("1")}>
        1
      </button>
      <button className="btn" onClick={() => setBtn1("2")}>
        2
      </button>
      <button className="btn" onClick={() => setBtn1("3")}>
        3
      </button>
      <button className="btn" onClick={() => setBtn1("100")}>
        100
      </button>
    </>
  );
}
export default User;
