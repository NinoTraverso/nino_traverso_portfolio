import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../services";

function createServiceCard(service) {
  return (
    <div
      key={service.id}
      className="col-12 col-xl-4 mb-5 d-flex justify-content-center"
    >
      <ServiceCard
        id={service.id}
        title={service.title}
        details={service.description}
      />
    </div>
  );
}

function Services() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <h1 id="services" className="sectionTitle d-none d-xl-block">
          SERVICES
        </h1>
        <h1
          id="services"
          className="sectionTitleMedium d-none d-md-block d-xl-none"
        >
          SERVICES
        </h1>
        <h1 id="services" className="sectionTitleSmall d-block d-md-none">
          SERVICES
        </h1>
      </div>
      <div className="row mb-5 servicesContainer mx-0">
        {services.map(createServiceCard)}
      </div>
    </div>
  );
}

export default Services;
