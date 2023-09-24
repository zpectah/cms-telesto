import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '@mui/joy';
import { useAuthSlice } from '../../hooks';
import { PageLayout, ViewLayout } from '../../components';

const Dashboard = () => {
  const { t } = useTranslation();

  const { auth, setAuth } = useAuthSlice();

  return (
    <PageLayout sidebar={<>sidebar ???</>}>
      <ViewLayout
        breadcrumbs
        heading={{
          title: 'Dashboard',
          subtitle: 'Page subtitle ...',
          secondary: (
            <Button variant="soft" color="neutral">
              Button example
            </Button>
          ),
        }}
      >
        Dashboard module ... {t('test_title')} <br /> ...{' '}
        {auth ? 'Logged in' : 'Not Logged In'} ...
        <br />
        <div>
          <button onClick={() => (auth ? setAuth(false) : setAuth(true))}>
            {auth ? 'Logout' : 'LogIn'}
          </button>
        </div>
      </ViewLayout>
    </PageLayout>
  );
};

export default Dashboard;
