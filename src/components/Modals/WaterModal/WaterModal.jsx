import css from '../WaterModal/WaterModal.module.css';
import WaterForm from "../WaterForm/WaterForm.jsx";


const WaterModal = ({ mode, onClose, water }) => {
  const title =
    mode === "add" ? (
      <h2 className={css.title}>Add Water</h2>
    ) : (
      <h2 className={css.title}>Edit the entered amount of water</h2>
    );

  const subtitle =
    mode === "add" ? (
      <p className={css.subtitle}>Choose a value:</p>
    ) : (
      <p className={css.subtitle}>Correct entered data:</p>
    );

  return (
    <div className={css.modalwrapper}>
      {title}
      {subtitle}
      <WaterForm mode={mode} onClose={onClose} water={water} />
    </div>
  );
};

export default WaterModal;