import css from './UseBarPopover.module.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const UserBarPopover = ({ handleOpenModal, handleOpenModal2 }) => {
  const { t } = useTranslation();
  return (
    <div className={css.modalWrapp}>
      <div className={css.div}>
        <button type="button" className={css.button} onClick={handleOpenModal2}>
          <IoSettingsOutline className={css.icon} />
          <span className={css.settings}>{t('user-bar-popover.setting')}</span>
        </button>
        <button type="button" className={css.button} onClick={handleOpenModal}>
          <FiLogOut className={`${css.logOut} ${css.icon}`} />
          <span className={`${css.logOut} ${css.settings}`}>{t('log-out-modal.log-out')}</span>
        </button>
      </div>
    </div>
  );
};

export default UserBarPopover;
