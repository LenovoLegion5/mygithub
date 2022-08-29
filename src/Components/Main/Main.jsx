import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Overview from "../Overview/Overview";
import Repos from "../Repositories/Repos";

function Main(props) {
  const styles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid #F78166" : "1px solid transparent",
    };
  };
  return (
    <main>
      <hr className="linehr" />
      <div className="main__wrapper">
        <div className="profile_section">
          <img
            className="profile__user"
            src="https://avatars.githubusercontent.com/u/96075955?v=4"
            alt="avatar"
          />
          <span className="edit_wrap">
            <img
              width="25"
              height="25"
              className="edit"
              src="https://github.githubassets.com/images/icons/emoji/unicode/1f30b.png"
              alt=""
            />
          </span>
          <h4 className="profile__nickname">LenovoLegion5</h4>
          <button className="replace-btn">Edit profile</button>
        </div>
        <section className="router">
          <NavLink style={styles} className="router__link" to="/">
            Overview
          </NavLink>
          <NavLink style={styles} className="router__link" to="/repos">
            Repositories <span className="length">{}</span>
          </NavLink>
          <section className="router__wrapper">
            <Routes>
              <Route
                index
                path="/"
                element={
                  <Overview needed={props.data} getDataFunc={props.getData} />
                }
              />
              <Route
                path="/repos"
                element={
                  <Repos data={props.send} getDataFunc={props.getData} />
                }
              />
              {/* <Route path="/:id" element={<Repo />} /> */}
            </Routes>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Main;
