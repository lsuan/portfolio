import React from "react";
 
function Stats() {
  const stats = [
    {name: "attention to detail", value: 100},
    {name: "communication", value: 100},
    {name: "collaboration", value: 100},
    {name: "learning rate", value: 90},
    {name: "time management", value: 90},
    // {name: "Intelligence", value: 87},
    {name: "analysis", value: 85},
  ]
  return (
    <div id="stats" className="w-100">
      <div className="title px-0 mb-1">
        ATTRIBUTES
      </div>
      {
        stats.map( (stat) =>
          <div key={`${stat.name}`} className="stat d-flex align-content-baseline">
            <i className="bi bi-pen-fill me-2 mt-1" />
            {stat.name}
            {/* <div className="stat-value">
              {stat.value}
            </div> */}
          </div>
        )
      }
    </div>
  );
}
 
export default Stats;

