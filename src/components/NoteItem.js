import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-lg-baseline">
            <h5 className="card-title">{note.title}</h5>

            <i class="fa-solid fa-trash mx-2"></i>
            <i class="fa-solid fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};
