

import React, { useState } from "react";
import "./BMI.css";
import Footer from "../components/Footer";


const BMI = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (!heightFeet || !weight || !age) {
      alert("Please fill in all required fields.");
      return;
    }
    const heightInMeters = (parseInt(heightFeet) * 12 + parseInt(heightInches)) * 0.0254;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiCategory("Normal");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <p>Body Mass Index</p>
      <div className="form-group">
        <div>
          <label>Gender</label>
          <div className="gender-buttons">
            <button
              className={gender === "male" ? "active" : ""}
              onClick={() => setGender("male")}
            >
              Male
            </button>
            <button
              className={gender === "female" ? "active" : ""}
              onClick={() => setGender("female")}
            >
              Female
            </button>
          </div>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Years"
          />
        </div>
        <div>
          <label>Height</label>
          <div className="height-inputs">
            <input
              type="number"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              placeholder="FT"
            />
            <input
              type="number"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              placeholder="IN"
            />
          </div>
          <button type="button" className="link-style">
            Switch to cm
          </button>
        </div>
        <div>
          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="in Kgs"
          />
        </div>
        <button className="calculate-button" onClick={calculateBMI}>
          Calculate
        </button>
      </div>
      <div className="bmi-result">
        <h2>Your BMI is</h2>
        <p>{bmi ? `${bmi} (${bmiCategory})` : "--"}</p>
      </div>

      {/* New Sections */}
      <div className="bmi-info-container">
        <div className="bmi-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7obsMZLYPcghxG_sjuSldaZj7Fq9nwApmA&s" alt="Icon" />
          <h2>How to calculate BMI</h2>
          <p>
            For adults over the age of 20 years, BMI values are grouped into the following weight status categories:
          </p>
          <table>
            <thead>
              <tr>
                <th>BMI</th>
                <th>Weight status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5–24.9</td>
                <td>Normal weight</td>
              </tr>
              <tr>
                <td>25–29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30–35</td>
                <td>Obese</td>
              </tr>
              <tr>
                <td>Over 35</td>
                <td>Morbid obesity</td>
              </tr>
            </tbody>
          </table>
          <p>The range remains the same for males and females. There is no separate BMI calculator for men and women.</p>
        </div>
        <div className="bmi-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdScq2md4rfCeXq97dfhYbam4K2hmApXemg&s" alt="Icon" />
          <h2>BMI for Children</h2>
          <p>
            In children, body fat content changes with age. It is also normal for teenage girls to have more body fat than boys. BMI calculation for children follows the same formula as adults but is then plotted on gender-specific percentile charts for children.
          </p>
          <p>
            For example, a 25th percentile BMI for a 6-year-old female child indicates that the child's weight is higher than 25% of girls aged 6.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BMI;
