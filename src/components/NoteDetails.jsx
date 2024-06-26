/* eslint-disable react/prop-types */
import "../assets/css/details.css";

export const NoteDetails = ({ setView, note }) => {
  return (
    <div className="note-details">
      <div className="details-wrapper">
        <div
          className="details-back-btn"
          data-testid="back-btn"
          onClick={() => setView(false)}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <h2 className="details-title" data-testid="details-title">
          {note?.title}
        </h2>
        <span className="details-timeline" data-testid="details-created-at">
          {note?.createdAt}
        </span>
        <div className="details-body">
          <p data-testid="details-description">{note?.desc}</p>
        </div>
      </div>
    </div>
  );
};
