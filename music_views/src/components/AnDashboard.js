import React, { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Singers } from './Singers2';
import { Song } from './Song';
import { AddSong } from './AddSong';
import { RemoveSong } from './RemoveSong';
import { SearchSong } from './SearchSong';
export const AnDashBoard = ({ msg }) => {
  const [Search, setSearch] = useState("");
  const doSearch = () => {
    const str1 = "/search/";
    const str2 = Search.trim(" ");
    let s1 = str1.concat(str2);
    return (s1);
  };
  return (
    <>
      <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow bg-info">
        <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Menu</span>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-60" type="text" placeholder="Search" name="input1" aria-label="Search" value={Search} onChange={event => setSearch(event.target.value)} />
        <div className="navbar-nav">
          <div>
            <NavLink className="nav-link searchbtn" to={doSearch}>
              <span data-feather="file"></span>
              Search
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 xyz">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/singers">
                    <span data-feather="home"></span>
                    Singers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/addSong">
                    <span data-feather="file"></span>
                    Add a Song
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/removeSong">
                    <span data-feather="home"></span>
                    Remove a Song
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Sonu Nigam">
                    <span data-feather="file"></span>
                    Sonu Nigam Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Shaan">
                    <span data-feather="file"></span>
                    Shaan  Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Neha kakkar">
                    <span data-feather="file"></span>
                    Neha kakkar Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Daler mehndi">
                    <span data-feather="file"></span>
                    Daler Mehndi Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Lucky ali">
                    <span data-feather="file"></span>
                    Lucky Ali Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Arijit singh">
                    <span data-feather="file"></span>
                    Arijit singh Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Sunidhi chauhan">
                    <span data-feather="file"></span>
                    Sunidhi Chauhan Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Honey singh">
                    <span data-feather="file"></span>
                    Honey singh Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Badshah">
                    <span data-feather="file"></span>
                    Badshah Songs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/songs/Diljit Dosanjh">
                    <span data-feather="file"></span>
                    Diljit Dosanjh Songs
                  </NavLink>
                </li>
              </ul>

            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="dashboardh2">{msg}</h1>
            </div>
            <Switch>
              <Route path="/" exact component={Singers} />
              <Route path="/singers" component={Singers} />
              <Route path="/addSong" component={AddSong} />
              <Route path="/removeSong" component={RemoveSong} />
              <Route path="/songs/:singerName" component={Song} />
              <Route path="/search/:name" component={SearchSong} />
              <Route render={() => <h1>404 Page Not Found</h1>} />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}