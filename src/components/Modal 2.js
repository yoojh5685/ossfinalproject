import React from 'react';
import '../CSS/Modal.css';
export default function Modal({ isOpen, onClose, onSelect, majors }) {
  if (!isOpen) return null; 

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2>전공 선택</h2>
        <ul>
          {Object.keys(majors).map((major) => (
            <li key={major}>
              <button onClick={() => onSelect(major)}>{major}</button>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
