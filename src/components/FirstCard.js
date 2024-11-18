import React from "react";

export default function FirstCard({ src, title, body }) {
  return (
    <div class="card" style={{ width: "113", height: "113" }}>
      <img
        src={src}
        // class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body}</p>
      </div>
    </div>
  );
}
