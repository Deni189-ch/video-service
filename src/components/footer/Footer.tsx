import React from "react";
import { SagittariusSvg } from "../../assets/index";

import "./style.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__logo-wrapper">
        <img
          src={SagittariusSvg}
          alt="...loading logo"
          className="footer__logo"
        />
      </div>

      <div className="footer__info">
        <div className="footer__address">
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
          246 (ДК «Металлург»)
        </div>
        <div className="footer__phone">+7 (3412) 93-88-61, 43-29-29</div>
        <div className="footer__link-website">htc-cs.ru</div>
      </div>
    </div>
  );
};
