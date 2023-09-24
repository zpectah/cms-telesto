import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { PageLayout, ViewLayout } from '../../components';

const Settings = () => {
  const router = useRouter();
  const { panel } = router.query;

  const menuItems = [
    {
      id: 0,
      label: 'General',
      path: '/settings',
      disabled: false,
      selected: panel === undefined,
    },
    {
      id: 1,
      label: 'Client',
      path: '/settings/client',
      disabled: false,
      selected: panel === 'client',
    },
    {
      id: 2,
      label: 'Content',
      path: '/settings/content',
      disabled: false,
      selected: panel === 'content',
    },
    {
      id: 3,
      label: 'Locales',
      path: '/settings/locales',
      disabled: false,
      selected: panel === 'locales',
    },
    {
      id: 4,
      label: 'Maintenance',
      path: '/settings/maintenance',
      disabled: false,
      selected: panel === 'maintenance',
    },
    {
      id: 5,
      label: 'Blacklist',
      path: '/settings/blacklist',
      disabled: false,
      selected: panel === 'blacklist',
    },
  ];

  const renderPanel = useMemo(() => {
    switch (panel) {
      case 'client':
        return <div>Client panel</div>;

      case 'content':
        return <div>Content panel</div>;

      case 'locales':
        return <div>Locales panel</div>;

      case 'maintenance':
        return <div>Maintenance panel</div>;

      case 'blacklist':
        return <div>Blacklist panel</div>;

      case undefined:
        return <div>General panel</div>;

      default:
        return <div>Error view</div>;
    }
  }, [panel]);

  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Settings' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <Box sx={{ width: '250px' }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemButton
                    onClick={() => router.push(item.path)}
                    disabled={item.disabled}
                    selected={item.selected}
                  >
                    <ListItemContent>{item.label}</ListItemContent>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <div>{renderPanel}</div>
          </Box>
        </Box>
      </ViewLayout>
    </PageLayout>
  );
};

export default Settings;
