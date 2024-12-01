import React from "react";

interface ModalProps {
  mainMessage: string;
  secondaryMessage: string;
}

const Modal: React.FC<ModalProps> = ({ mainMessage, secondaryMessage }) => {
  return (
    <div className="backdrop">
      <section className="modal">
        <h1 className="font-bold text-2xl text-center">{mainMessage}</h1>
        <h1 className="font-bold text-2xl text-center mt-5">{secondaryMessage}</h1>
      </section>
    </div>
  );
};

export default Modal;
