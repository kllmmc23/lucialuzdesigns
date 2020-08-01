import React from "react";

const video = "https://storage.coverr.co/videos/BUTGy61ysPw02YF2N2PI31KulokN300LFv?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkwNzE1NjI0fQ.I49nstd-6ptxOPLaPYdjkO7Tri1OA1o4gRZl7uEs3wc";

export default function Stories() {
  return (
    <section className="section-stories ">
      <div className="bg-video">
        <video id="bg-video" autoPlay muted loop>
          <source
            src={video}
            type="video/mp4"
          />
          <source src={video} type="video/webm" />
          Your Browser is not supported!
        </video>
      </div>
      <div className="u-center-text ">
        <h2 className="heading-secondary u-margin-bottom-big">
          We make people genuinely happy{" "}
        </h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"
              alt="person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mark Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              provident officiis recusandae porro excepturi corrupti tempore
              cum, iure libero quo.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"
              alt="person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mark Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              provident officiis recusandae porro excepturi corrupti tempore
              cum, iure libero quo.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn btn-text">
          Read All Stories &rarr;
        </a>
      </div>
    </section>
  );
}
