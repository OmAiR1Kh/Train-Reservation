/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useEffect, useState } from "react";
import plus from "../../../assets/plusIcon.svg";
import "./usercard.css";
import remove from "../../../assets/remove.svg";
import pen from "../../../assets/pen.svg";
import { useDispatch, useSelector } from "react-redux";

const UserCard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({ ...state }));
  const [user, setUser] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const getUser = useCallback(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      setShouldUpdate(true);
    } else {
      setUser([]);
    }
  }, [setUser, setShouldUpdate]);

  const handleUserChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
    setShouldUpdate(false);
  };
  useEffect(() => {
    getUser();
    setShouldUpdate(false);
  }, [users, localStorage.getItem("user"), shouldUpdate]);

  const handleDelete = (name) => {
    let toDelete = "";
    console.log(name);
    users.filter((user) => {
      user.name === name;
      toDelete = name;
    });
    users.splice(
      users.findIndex((user) => user.name === toDelete),
      1
    );
    localStorage.setItem("user", JSON.stringify(users));
    getUser();
  };
  const handleUserSubmit = (e) => {
    setShouldUpdate(false);
    e.preventDefault();
    let usersVar = [];
    usersVar = user;
    if (
      data.name &&
      data.age &&
      data.gender &&
      data.nationality &&
      data.berth
    ) {
      usersVar.push(data);
      console.log("users Var= ", usersVar);
      // user.push(data);
      dispatch({ type: "NEW_TRAVELER", payload: usersVar });
      localStorage.setItem("user", JSON.stringify(usersVar));
      setUser((oldUser) => [...oldUser, data]);
    } else {
      setError("All Fields Are Required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return null;
    }
  };
  return (
    <>
      <div className="user-data">
        <div className="title">
          <p>Traveller Details</p>
          <span>
            As per IRCTC Guidelines, you can book up to 4 travellers at once
          </span>
          <img src={plus} alt="" />
        </div>
        {users.length > 0 && (
          <div className="user">
            <ol>
              {users.length > 0 &&
                user.map((traveler, index) => (
                  <li key={index} name={traveler.name}>
                    {traveler.name}

                    <span className="icons">
                      <img src={pen} alt="" />
                      <img
                        src={remove}
                        alt=""
                        onClick={() => handleDelete(traveler.name)}
                      />
                    </span>
                  </li>
                ))}
            </ol>
          </div>
        )}
        <p style={{ fontSize: "0.8rem" }}>Traveller Details</p>
        <form
          onSubmit={handleUserSubmit}
          className="add-user-form booking-user-form"
        >
          <div>
            <input
              type="text"
              placeholder="Name Of Traveller"
              name="name"
              onChange={handleUserChange}
            />
          </div>
          <div>
            <input
              placeholder="Age"
              type="number"
              name="age"
              onChange={handleUserChange}
            />
          </div>
          <div>
            <select
              name="gender"
              onChange={handleUserChange}
              defaultValue="gender"
            >
              <option value="gender" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nationality"
              name="nationality"
              onChange={handleUserChange}
            />
          </div>
          <div>
            <select
              name="berth"
              onChange={handleUserChange}
              defaultValue="berth"
            >
              <option value="berth" disabled>
                Berth
              </option>
              <option value="lower">Lower</option>
              <option value="upper">Upper</option>
              <option value="middle">Middle</option>
              <option value="side-lower">Side-Lower</option>
              <option value="side-upper">Side-Upper</option>
            </select>
          </div>
          <button>Save</button>
        </form>
        <p className="error">{error}</p>
      </div>
    </>
  );
};

export default UserCard;
