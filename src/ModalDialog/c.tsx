import React, { useEffect, useState } from 'react';
import './style.css';

class DialogModel {
  public visible: boolean = false;
  public title: string = '提示';
  public closeOnClick: boolean = false;
  public content: React.ReactNode = '。。。';
};

const ModalComponent = () => {

  const [state, setState] = useState<DialogModel>(new DialogModel());

  const modalHandler = (e: CustomEventInit<DialogModel>) => {
    setState(e.detail || new DialogModel());
  };

  const close = () => {
    const data = new DialogModel();
    data.visible = false;
    setState(data);
  };

  const modalClick = () => {
    if (state.closeOnClick) close();
  };

  useEffect(() => {
    document.addEventListener('modal', modalHandler);
    return () => {
      document.removeEventListener('modal', modalHandler);
    };
  });

  if (!state.visible) return null;

  return (
    <div className="modal" onClick={modalClick}>
      <div className="dialog">
        <div className="dialog-title">{state.title}
          <span className="dialog-close" onClick={close}>+</span>
        </div>
        <div className="dialog-content">{state.content}</div>
      </div>
    </div>
  );
};

ModalComponent.show = (data: DialogModel = new DialogModel()) => {
  data.visible = true;
  document.dispatchEvent(new CustomEvent('modal', { detail: data }));
};

export default ModalComponent;