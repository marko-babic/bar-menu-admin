import React from 'react';
import Client  from '../Infrastructure/Http/Client';
import Sidebar from './Sidebar.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const PublishIndex = () => {
  const { t } = useTranslation();

  const publish = async () => {
    try {
      await Client.publishMenu();
      toast.success(t('responses.success'));
    } catch (error) {
      toast.success(t('responses.error'));
    }
  }

  return (
    <>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <div className="main-header" style={{ textAlign: 'center' }}>
          <button className="button button-inactive" onClick={publish}>{t('actions.publish_menu')}</button>
        </div>
        <div className="main-row">

        </div>
      </main>
    </>
  );
}

export default PublishIndex;
