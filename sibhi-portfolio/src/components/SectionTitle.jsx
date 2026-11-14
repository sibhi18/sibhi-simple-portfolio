import React from "react";

export default function SectionTitle({ eyebrow, title, note }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {note && <p className="section-note">{note}</p>}
      </div>
    </div>
  );
}
