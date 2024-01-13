import React from "react";

function ServiceCard(props) {
  const className = `service service${props.id}`;

  return (
    <div id="serviceCard" className={`${className}`}>
      <div className="d-flex flex-column justify-content-between">
        <h3 className="name serviceName text-center pt-3">{props.title}</h3>
        <h5 className="details serviceDetails p-5 text-center fs-5">
          {props.details}
        </h5>
      </div>
    </div>
  );
}

export default ServiceCard;
