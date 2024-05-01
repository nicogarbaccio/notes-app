/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/css/navbar.css";

export const Navbar = ({
  setOpen,
  state,
  dispatch,
  palettes,
  currentPalette,
  setCurrentPalette,
}) => {
  const [onPalette, setOnPalette] = useState(false);

  const handlePalette = (item) => {
    setCurrentPalette(item);
    dispatch({ type: "SET_PALETTE", payload: item });
    setOnPalette(false);
  };
  return (
    <div
      className={`navbar ${
        state?.palette ? state?.palette?.name : currentPalette?.name
      }`}
    >
      <div className="nav-wrapper container">
        <span className="logo" data-testid="logo">
          Notes
        </span>
        <div className="nav-options">
          <div className="nav-icon">
            <div
              className={`palettes ${onPalette && "active"}`}
              data-testid="palette-selector"
            >
              {palettes.map((palette) => (
                <div
                  onClick={() => handlePalette(palette)}
                  key={palette?.id}
                  style={{ backgroundColor: `${palette?.color}` }}
                  className={`palette-item ${
                    currentPalette?.id === palette?.id && "active"
                  }`}
                  data-testid={`${palette?.color}-swatch`}
                ></div>
              ))}
            </div>
            <i
              onClick={() => setOnPalette((prev) => !prev)}
              className="fa-solid fa-circle-half-stroke"
            ></i>
          </div>
          <div
            className="nav-icon"
            onClick={() => setOpen(true)}
            data-testid="create-note-btn"
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
