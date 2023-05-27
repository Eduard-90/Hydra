import React from "react";
import "./Main.scss";
import mainImg from "../../assets/mobile/03.png";

export const Main = () => {
  return (
    <main className="main">
      <section class="main__introduction">
        <div className="main__introduction-title">
          <h2>INTRODUCTION</h2>
          <p>TO HYDRA VR</p>
        </div>
        <img src={mainImg} alt="03" className="main__introduction-img" />
        <p className="main__introduction-text">
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipisci ng at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat sem per
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudin tempor.
        </p>
        <div>
          <button className="main__introduction-btn">LET'S GET IN TOUCH</button>
        </div>
      </section>
    </main>
  );
};
