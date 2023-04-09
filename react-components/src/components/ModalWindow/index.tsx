import style from './ModalWindow.module.css';

const ModalWindow = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={active ? `${style.modal_window} ${style.active}` : `${style.modal_window}`}
      onClick={() => setActive(false)}
    >
      <div className={style.content} onClick={(e) => e.stopPropagation}></div>
    </div>
  );
};

export default ModalWindow;
