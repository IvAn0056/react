import React from "react";
import '../styles/MyOrders.scss';
import { useNavigate } from "react-router-dom";

import flecha from '@icons/flechita.svg';

const MyOrders = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  return (
    <div className="principal-containerMOS">
      <div className="secundary-containerMOS">
        <h1 className="titleMOS">My orders</h1>

        <div className="articles-infoMOS articles-info-topMOS" onClick={() => routeChange("/myorder")}>
          <div className="info-oneMOS infoMOS">
            <p>04.25.2021</p>
            <p>6 articles</p>
          </div>
          <div className="info-twoMOS infoMOS">
            <p>$ 120.00</p>
            <img src={flecha} alt="Flecha" />
          </div>
        </div>
        <div className="articles-infoMOS" onClick={() => routeChange("/myorder")}>
          <div className="info-oneMOS infoMOS">
            <p>02.20.2021</p>
            <p>6 articles</p>
          </div>
          <div className="info-twoMOS infoMOS">
            <p>$ 120.00</p>
            <img src={flecha} alt="Flecha" />
          </div>
        </div>
        <div className="articles-infoMOS" onClick={() => routeChange("/myorder")}>
          <div className="info-oneMOS infoMOS">
            <p>02.10.2021</p>
            <p>6 articles</p>
          </div>
          <div className="info-twoMOS infoMOS">
            <p>$ 120.00</p>
            <img src={flecha} alt="Flecha" />
          </div>
        </div>
        <div className="articles-infoMOS" onClick={() => routeChange("/myorder")}>
          <div className="info-oneMOS infoMOS">
            <p>01.09.2021</p>
            <p>6 articles</p>
          </div>
          <div className="info-twoMOS infoMOS">
            <p>$ 120.00</p>
            <img src={flecha} alt="Flecha" />
          </div>
        </div>
        <div className="articles-infoMOS" onClick={() => routeChange("/myorder")}>
          <div className="info-oneMOS infoMOS">
            <p>01.08.2021</p>
            <p>6 articles</p>
          </div>
          <div className="info-twoMOS infoMOS">
            <p>$ 120.00</p>
            <img src={flecha} alt="Flecha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
