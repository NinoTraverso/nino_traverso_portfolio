import React from "react";

function Profile() {
  return (
    <div
      id="profile"
      className="d-flex flex-column flex-xl-row justify-content-around align-items-center pt-4"
    >
      {" "}
      <div id="imageContainer" className="pb-0 mb-0 d-block d-xl-none">
        <img
          id="profileImage"
          src="/assets/testingOpacity.png"
          alt="profileImage"
        ></img>
      </div>
      <div
        id="profession"
        className="col-12 col-xl-6 d-flex flex-column justify-content-center mt-0"
      >
        <h1 id="myNameXl" className="d-none d-xl-block text-center">
          NINO J. TRAVERSO
        </h1>
        <h1 id="myNameMd" className="d-none d-md-block d-xl-none text-center">
          NINO J. TRAVERSO
        </h1>
        <h1 id="myNameSm" className="d-block d-md-none text-center">
          NINO J. TRAVERSO
        </h1>
        <div id="professionList" className="text-center mx-0">
          <div className=" mt-5">
            <h2>Full-Stack Developer</h2>
          </div>
          <div>
            <h2>&amp;</h2>
          </div>
          <div>
            <h2>Web Designer</h2>
          </div>
        </div>
      </div>
      <div id="imageContainer" className="pb-0 mb-0 d-none d-xl-block">
        <img
          id="profileImage"
          src="/assets/testingOpacity.png"
          alt="profileImage"
        ></img>
      </div>
    </div>
  );
}

export default Profile;
