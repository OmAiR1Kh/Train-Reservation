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
  const getUser = useCallback(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser([]);
    }
    /* a way to force the re-rendering in React.
    this will call the function as soon as the window loads since I called it in useEffect
    and it will recall itself once more causing the re-render */

    setTimeout(() => {
      getUser();
    }, 100);
  });

  useEffect(() => {
    getUser();
  }, [localStorage.getItem("user")]);

  const handleUserChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const getUsers = () => {
    localStorage.getItem("users");
  };
  useEffect(() => {
    getUsers();
  }, [users]);
  const handleDelete = (name) => {
    let toDelete = "";
    console.log(name);
    users.filter((user) => {
      user.name === name;
      toDelete = name;
    });
    console.log(toDelete);
    users.splice(
      users.findIndex((user) => user.name === toDelete),
      1
    );
    localStorage.setItem("user", JSON.stringify(users));
  };
  const handleUserSubmit = (e) => {
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
                users.map((traveler, index) => (
                  <li key={traveler.name} name={traveler.name}>
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
        <form onSubmit={handleUserSubmit}>
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
