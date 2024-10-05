// contentScript.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const LinkedInReplyExtension = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const inputField = document.querySelector('[role="textbox"]');

    if (inputField) {
      inputField.addEventListener('focus', () => setShowIcon(true));
      inputField.addEventListener('blur', () => setShowIcon(false));
    }
    
    return () => {
      if (inputField) {
        inputField.removeEventListener('focus', () => setShowIcon(true));
        inputField.removeEventListener('blur', () => setShowIcon(false));
      }
    };
  }, []);

  return showIcon ? (
    <div className="ai-icon">
      {/* Add AI icon here (SVG from Figma) */}
    </div>
  ) : null;
};

// Inject React component into the DOM
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<LinkedInReplyExtension />);


// contentScript.tsx (updated)
import Modal from './Modal';

const LinkedInReplyExtension = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const inputField = document.querySelector('[role="textbox"]');

    if (inputField) {
      inputField.addEventListener('focus', () => setShowIcon(true));
      inputField.addEventListener('blur', () => setShowIcon(false));
    }
    
    return () => {
      if (inputField) {
        inputField.removeEventListener('focus', () => setShowIcon(true));
        inputField.removeEventListener('blur', () => setShowIcon(false));
      }
    };
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showIcon && (
        <div className="ai-icon" onClick={() => setShowModal(true)}>
          {/* AI Icon (SVG) */}
        </div>
      )}
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};


const insertIntoInput = (text: string) => {
    const inputField = document.querySelector('[role="textbox"]');
    if (inputField) {
      (inputField as HTMLElement).innerText = text;
    }
  };
  