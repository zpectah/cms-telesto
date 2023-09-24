import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { PageLayout, ViewLayout } from '../../components';

const Profile = () => {
  const router = useRouter();
  const { panel } = router.query;

  const menuItems = [
    {
      id: 0,
      label: 'General',
      path: '/profile',
      disabled: false,
      selected: panel === undefined,
    },
    {
      id: 1,
      label: 'History',
      path: '/profile/history',
      disabled: false,
      selected: panel === 'history',
    },
  ];

  const renderPanel = useMemo(() => {
    switch (panel) {
      case 'history':
        return <div>Blacklist panel</div>;

      case undefined:
        return <div>General panel</div>;

      default:
        return <div>Error view</div>;
    }
  }, [panel]);

  return (
    <PageLayout>
      <ViewLayout breadcrumbs heading={{ title: 'Profile' }}>
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

export default Profile;
