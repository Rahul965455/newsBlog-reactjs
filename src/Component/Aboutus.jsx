import React from "react";

const Aboutus = () => {
    // main  
  const ShowAbout = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={"./thumb.jpg"}
            alt="title"
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">Hello Dev </h4>
          <h1 className="display-5">My Self Rahul Rawat</h1>
          <p className="lead fw-bolder">
            <p className="lead">Stepping In The World Of Software Technologies,I Am A Frontend-Dev And Programmer Willing TO Explore The World of Programming</p>
            <h4 className="text-uppercase text-black-50">Education</h4>
            <p className="lead"></p>
          </p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>
        <div className="container py-5">
          <div className="row py-5">
            <ShowAbout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
