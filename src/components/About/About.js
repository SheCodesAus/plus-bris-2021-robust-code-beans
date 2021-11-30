import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        background: #6495ed;
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src="https://media.istockphoto.com/photos/female-startup-business-team-picture-id1039076422?b=1&k=20&m=1039076422&s=170667a&w=0&h=_2QSPKDWmPmw3a1VxjxcHSpoNaYyygh6aRvms9C_X2U="
          alt=""
        />
      </div>
      <div class="col-lg-5">
        <h1 style={{ background: "#000" }}>
          Showcasing Diverse Role Models in Tech
        </h1>
        <p>
          Too many times we have heard young people ask us questions such as
          <span class="focus">"can women be software engineers?"</span> or
          comments such as{" "}
          <span class="focus">
            "there is no one in tech who looks like me".
          </span>
          <br></br>
          <br></br>
          At She Codes we are trying to change that, this website was created as
          a hub where the community can create profiles of women and non-binary
          folk. The idea would be that we could share this website to show young
          people that anyone can work in Tech. This project outline above formed
          the basis of our final group project for She Codes Brisbane Cohort
          2021. Our group, the RobustCodingBeans, worked with our client Sara
          Borgstrom (BHP) to develop a MVP (Minimum Viable Product) website with
          the product aim above.
          <br></br>
          <br></br>
          An MVP is the base features and functionality required by the client
          to meet initial approval. In the "real world" we would then continue
          to work through improvements and additional features in communication
          with the client until a final end point is reached.
          <br></br>
          <br></br>
          We had only a few weeks to complete the MVP while all juggling work,
          family and other commitments. We did push ourselves to implement
          functionality that we had not used previously such as image uploding,
          filters based on multiple criteria, profile approval/decline process
          and also tried out MUI Library for our navigation. This was our first
          time working collaboratively using github which was a learning curve
          but part of the process.
        </p>
      </div>
    </div>
  );
}

export default About;
