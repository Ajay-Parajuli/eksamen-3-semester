import React from "react";
import { GrDeliver } from "react-icons/gr";

export const Banner = () => {
  return (
    <div className="banner">
      <div>
        <p>Gratis fragt og retur på odre over 300kr.</p>
      </div>

      <div className="ekstrabanner">
        <GrDeliver className="ic" />
      </div>

      <div className="ekstrabanner">
        <p>Gratis fragt og retur på alle ordre til Aarhus C</p>
      </div>
    </div>
  );
};
