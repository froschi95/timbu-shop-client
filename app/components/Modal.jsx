import React from "react";
import Image from "next/image";
import Close from "/public/Close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg z-10 relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-2">
          <Image src={Close} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
