import React from "react";

export default function TeamCard({ member, delay = 0 }) {
  return (
    <div
      className="team-card"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="avatar-circle">
        {member.name.charAt(0)}
      </div>

      <h3>{member.name}</h3>
      <span className="title">{member.title}</span>
      <p className="role">{member.role}</p>

      {member.handle && (
        <a
          className="handle"
          href={`https://twitter.com/${member.handle.replace("@", "")}`}
          target="_blank"
          rel="noreferrer"
        >
          {member.handle}
        </a>
      )}
    </div>
  );
}
