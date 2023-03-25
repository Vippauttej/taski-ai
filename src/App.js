import "./App.css";
import axios from "axios";
import pic1 from "./images/upload.png";
import pic2 from "./images/img5.jpg";
import pic3 from "./images/img1.jpg";
import pic4 from "./images/img2.jpg";
import pic5 from "./images/img3.jpg";
import pic6 from "./images/img4.jpg";
import { useEffect } from "react";
function App() {
  const options = {
    method: "GET",
    url: "https://api.d-id.com/talks",
    params: { limit: "100" },
    headers: {
      accept: "application/json",
      authorization:
        "Basic dmlwcGF1dHRlajE4QGdtYWlsLmNvbQ:e1LVfnIv6p9xbNS2lHcsD",
    },
  };

  function fetchData() {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="brn">
          <button type="button" className="btn btn-light">
            Manual
          </button>
          &nbsp; &nbsp;&nbsp;
          <button type="button" className="btn btn-dark">
            AI Generated
          </button>
          <br />
          <br />
          <br />
          <div className="file">
            <div className="mg">
              <input type="file" src={pic1} placeholder="upload file" />
            </div>
            <div className="row">
              <div className="cardimg">
                <div className="card">
                  <img src={pic2} className="card-img-top" alt="..." />
                </div>
                <div className="card">
                  <img src={pic3} className="card-img-top" alt="..." />
                </div>
                <div className="card">
                  <img src={pic4} className="card-img-top" alt="..." />
                </div>
                <div className="card">
                  <img src={pic5} className="card-img-top" alt="..." />
                </div>
              </div>
            </div>
            <br />
            <div className="cardimg2">
              <div className="card">
                <img src={pic6} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div className="rdiv">
          <button type="button" className="btn btn-light">
            Script
          </button>
          &nbsp; &nbsp;&nbsp;
          <button type="button" className="btn btn-dark">
            Audio
          </button>
          <br />
          <textarea
            placeholder="Type your script here, you can start from scratch or use our script-generation feature below."
            rows={6}
            cols={50}
          ></textarea>
          <br />
          <label for="input validation">Input validation</label>
          <span
            style={{
              color: "red !important",
            }}
          >
            *
          </span>
          <select id="country" name="country" class="form-control">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
          </select>
          <label for="voices">Voices</label>
          <select id="voices" name="voices" class="form-control">
            <option value="jenny">Jenny</option>
            <option value="jennifer">Jennifer</option>
            <option value="lawrence">Lawrence</option>
            <option value="johnson">Johnson</option>
            <option value="thomson">Thomson</option>
            <option value="james">James</option>
            <option value="Benstokes">Benstokes</option>
            <option value="Angel">Angel</option>
            <option value="thomas">Thomas</option>
          </select>
          <br />
          <label for="Styles">Styles</label>
          <select id="Styles" name="Styles" class="form-control">
            <option value="Assistant">Assistant</option>
            <option value="Associate">Associate</option>
          </select>
          <br />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "10rem",
              marginRight: "10rem",
            }}
          >
            Generate Video
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
