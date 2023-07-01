import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function BackButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button className="button button-secondary" onClick={(e) => navigate(-1)}>
      {t('navigation.back')}
    </button>
  );
}

export default BackButton;