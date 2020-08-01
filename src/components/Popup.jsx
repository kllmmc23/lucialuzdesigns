import React from "react";
import { NavLink } from "react-router-dom";

const pic1 =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const pic2 =
  "https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

export default function Popup() {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={pic1} alt="tour photo1" className="popup__img" />
          <img src={pic2} alt="tour photo2" className="popup__img" />
        </div>
        <div className="popup__right">
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-medium">
            Important &ndash; Please Read!
          </h3>
          <p className="popup__text">
            <NavLink to="/tours" className="popup__close">
              &times;
            </NavLink>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            explicabo perspiciatis unde fugiat. Beatae iure obcaecati at illum!
            Ducimus maiores nesciunt reprehenderit maxime itaque necessitatibus
            deserunt, voluptatum praesentium perspiciatis consequuntur sequi
            iure odio quod facere nobis, ad asperiores quasi, consequatur
            consectetur nemo voluptate similique. Aspernatur eos vero tenetur
            reprehenderit saepe. Cum itaque illo vero? Aut tempore hic nemo?
            Ipsam, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quia explicabo perspiciatis unde fugiat. Beatae iure obcaecati at
            illum! Ducimus maiores nesciunt reprehenderit maxime itaque
            necessitatibus deserunt, voluptatum praesentium perspiciatis
            consequuntur sequi iure odio quod facere nobis, ad asperiores quasi,
            consequatur consectetur nemo voluptate similique. Aspernatur eos
            vero tenetur reprehenderit saepe. Cum itaque illo vero? Aut tempore
            hic nemo? Ipsam, qui. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia explicabo perspiciatis unde fugiat. Beatae
            iure obcaecati at illum! Ducimus maiores nesciunt reprehenderit
            maxime itaque necessitatibus deserunt, voluptatum praesentium
            perspiciatis consequuntur sequi iure odio quod facere nobis, ad
            asperiores quasi, consequatur consectetur nemo voluptate similique.
            Aspernatur eos vero tenetur reprehenderit saepe. Cum itaque illo
            vero? Aut tempore hic nemo? Ipsam, qui.
          </p>
        </div>
      </div>
    </div>
  );
}
