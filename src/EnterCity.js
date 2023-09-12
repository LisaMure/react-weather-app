import React from "react";
import CurrentLocation from "./CurrentLocation";

export default function EnterCity() {
  return (
    <div className="City">
      <form>
        <input className="enter-city" type="search" placeholder="Enter city" />
        <button className="search-btn" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <CurrentLocation />
    </div>
  );
}
