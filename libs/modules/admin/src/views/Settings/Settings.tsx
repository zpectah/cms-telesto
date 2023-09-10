'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { PageLayout, ViewLayout } from '../../layout';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <PageLayout pageKey="settings">
      <ViewLayout
        sidebar={<>Artificial Sidebar</>}
        title="Settings"
        subtitle="Page subtitle"
      >
        <div>
          Settings module ... {t('test_title')}
          <div>
            ... <Link href="/dashboard">go to dashboard page</Link>
          </div>
        </div>
      </ViewLayout>
    </PageLayout>
  );
};

export default Settings;
