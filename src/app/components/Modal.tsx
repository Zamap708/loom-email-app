import React from "react";

interface ModalProps {
  handleModal: () => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { handleModal, children } = props;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/30 z-40">
      <div
        onClick={handleModal}
        className="absolute top-0 left-0 w-screen h-screen"
      ></div>
      <div className="w-2/3 aspect-video p-6 bg-stone-200 z-50 rounded shadow">
        {children}
      </div>
    </div>
  );
}
