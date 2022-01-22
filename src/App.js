import { useEffect, useState } from "react";
import "./argon.min.css";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6");
        setData(response.data.clients);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-success">
        <div class="container">
          <a class="navbar-brand" href="#home">
            Books App Task
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-default">
            <div class="navbar-collapse-header">
              <div class="row">
                <div class="col-6 collapse-brand"></div>
                <div class="col-6 collapse-close">
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>

            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#home">
                  <i class="ni ni-favourite-28"></i>
                  <span class="nav-link-inner--text d-lg-none">Discover</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#home">
                  <i class="ni ni-notification-70"></i>
                  <span class="nav-link-inner--text d-lg-none">Profile</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link nav-link-icon" href="#home" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="ni ni-settings-gear-65"></i>
                  <span class="nav-link-inner--text d-lg-none">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!data.length && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      <div class="table-responsive">
        <div>
          <table class="table align-items-center">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="id">
                  ID
                </th>
                <th scope="col" class="sort" data-sort="name">
                  Name
                </th>
                <th scope="col" class="sort" data-sort="company">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((val) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.company}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
