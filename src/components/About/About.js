import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src="http://placehold.it/900x400"
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
          people that anyone can work in Tech.
        </p>
      </div>
    </div>
  );
}

export default About;
