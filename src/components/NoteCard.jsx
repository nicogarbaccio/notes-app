/* eslint-disable react/prop-types */
import "../assets/css/card.css";

export const NoteCard = ({ onPreview, onUpdate, onDelete, note }) => {
  return (
    <div className="note-card" data-testid="note-card">
      <div className="note-card-wrapper">
        <h2
          className="card-title"
          data-testid="card-title"
          onClick={() => onPreview(note)}
        >
          {note?.title}
        </h2>
        <div className="card-body">
          <p data-testid="card-desc">{note?.desc}</p>
        </div>
        <span
          className="card-details"
          data-testid="read-more"
          onClick={() => onPreview(note)}
        >
          read more
        </span>
        <div className="card-footer">
          <span className="card-timeline" data-testid="card-created-at">
            {note?.createdAt}
          </span>
          <div className="card-actions">
            <div
              className="action-item"
              data-testid="edit-note-btn"
              onClick={() => onUpdate(note)}
            >
              <i className="fa-solid fa-pen-to-square edit"></i>
            </div>
            <div
              className="action-item"
              data-testid="delete-note-btn"
              onClick={() => onDelete(note?.id)}
            >
              <i className="fa-solid fa-trash-can delete"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
