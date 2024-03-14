import React from 'react';
import ReactDOM from 'react-dom';

const Alert = ({ hiddenAlertObject }) => {
  const { isHidden, text, isSuccess } = hiddenAlertObject;

  if (isHidden) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`fixed w-[500px] flex items-end justify-start top-0 right-0 z-40 inset- bg-transparent`}>
      <div className={`border-2 ${isSuccess ? 'border-green-700' : 'border-red-700'} shadow-xl flex items-center justify-center h-[10%] relative w-full bg-white text-black rounded-lg p-4 m-8`}>
        <p className={`text-xl ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>{text}</p>
      </div>
    </div>,
    document.body
  );
};

export default Alert;