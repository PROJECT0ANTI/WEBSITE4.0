import React from "react";

export default function FounderCard({ name, bio }) {
  return (
    <div className="founder-card">
      <div className="founder-avatar">
        {name.charAt(0)}
      </div>

      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
