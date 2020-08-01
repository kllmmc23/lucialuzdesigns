import React from "react";

export default function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Portfolio of my best Pics</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You will fall in love .........
          </h3>
          <p className="paragraph">
            “Photography for me is not looking, it’s feeling. If you can’t feel
            what you’re looking at, then you’re never going to get others to
            feel anything when they look at your pictures.” — Don McCullin
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Living the adventures ........
          </h3>
          <p className="paragraph">
            “Photography is a way of feeling, of touching, of loving. What you
            have caught on film is captured forever… It remembers little things,
            long after you have forgotten everything.” — Aaron Siskind
          </p>
          <a href="/gallery" className="btn btn-text">
            show me more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/29388565_1683947985015231_7304482860633686016_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=yXZFYC78CpAAX84iDwp&_nc_ht=scontent.fapa1-2.fna&oh=ce5f76357d7c3671c7cb3f7b08eeaee0&oe=5F477DA3"
              alt="pic1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/s960x960/27912710_1649190341824329_472840996033050378_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=uYe8DLroNaUAX9dgz1z&_nc_ht=scontent.fapa1-1.fna&_nc_tp=7&oh=17df0c83d20a7b85ea643bbec3ce8c41&oe=5F4A3247"
              alt="pic2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/26733496_1603376986405665_4623112225262446685_n.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=O545xTDE2YAAX-Zh48N&_nc_ht=scontent.fapa1-2.fna&oh=f2c6159535c8456e7661a5a708446ee4&oe=5F4A5CA3"
              alt="pic3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
