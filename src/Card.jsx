import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.coverImg} />
      <div className="card-stats">
        <img className="card-map" src="map logo.png" />
        <h4>{props.location.toUpperCase()}</h4>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h2 className="card-title">{props.title}</h2>
        <h5 className="card-date">{props.startDate + " - " + props.endDate}</h5>
        <p className="card-desc">{props.description}</p>
      </div>    
    </div>
  );
}
