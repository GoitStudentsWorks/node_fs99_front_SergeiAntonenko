import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';
import { useTranslation } from 'react-i18next';

export const UserSettingsModal = ({ handleCloseModal }) => {

  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{t('settings.setting')}</h2>
      <UserSettingsForm onClose={handleCloseModal} />
    </div>
  );
};
