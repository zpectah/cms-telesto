'use client';

import React from 'react';
import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { PageLayout, ViewLayout } from '../../layout';

const Settings = () => {
  // const { t } = useTranslation();

  return (
    <PageLayout pageKey="settings">
      <ViewLayout
        sidebar={
          <List disablePadding>
            <ListItem disablePadding selected>
              <ListItemButton component={Link} href="/settings/general">
                <ListItemText>General panel</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/settings/system">
                <ListItemText>System panel</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/settings/other">
                <ListItemText>Other panel</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/settings/other">
                <ListItemText>Other panel</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        }
        title="Settings"
        subtitle="Page subtitle"
      >
        <div>
          <p>
            Etiam sit amet, nunc iaculis molestie curabitur nullam tristique id
            dolor, erat id nec ipsum vestibulum. Eget sit amet, nulla a volutpat
            elit dui molestie accumsan sed, mattis proin purus consequat. Sit
            amet rhoncus, ligula odio morbi pretium accumsan tristique augue
            aliquam pharetra, quam quisque arcu nulla. Metus luctus, urna
            posuere sagittis aenean sem lobortis felis fermentum, in donec
            libero viverra auctor. Phasellus sed, sed nunc ut enim et tincidunt
            lectus quis aliquet quis commodo, at ut hendrerit et nisl sed
            porttitor. Vivamus proin, id dolor magna et volutpat in nisi aliquet
            lectus cursus, nunc ultricies enim in quam. Condimentum venenatis,
            nisl vel purus tellus sem odio aliquet in nisi felis a fermentum,
            urna a a lacinia luctus. Ollicitudin tempus, bibendum non
            scelerisque fusce gravida mauris lorem ipsum suspendisse, euismod
            dolor sit amet imperdiet felis a. Volutpat purus, vehicula dui vel
            dolor in donec pellentesque sapien justo vulputate, nullam ut
            venenatis rhoncus erat tortor. Tortor quis, sapien nec commodo
            hendrerit facilisis suspendisse odio leo accumsan, et aenean ut
            porttitor. Imperdiet nunc, a lacinia bibendum finibus quis ut nisl
            mauris in ex sem mauris molestie, fringilla eget et elit suscipit.
            Quis odio elementum, volutpat in ex sem id mauris dignissim nulla
            consequat, libero sed tellus erat egestas.
          </p>
          <p>
            Etiam sit amet, nunc iaculis molestie curabitur nullam tristique id
            dolor, erat id nec ipsum vestibulum. Eget sit amet, nulla a volutpat
            elit dui molestie accumsan sed, mattis proin purus consequat. Sit
            amet rhoncus, ligula odio morbi pretium accumsan tristique augue
            aliquam pharetra, quam quisque arcu nulla. Metus luctus, urna
            posuere sagittis aenean sem lobortis felis fermentum, in donec
            libero viverra auctor. Phasellus sed, sed nunc ut enim et tincidunt
            lectus quis aliquet quis commodo, at ut hendrerit et nisl sed
            porttitor. Vivamus proin, id dolor magna et volutpat in nisi aliquet
            lectus cursus, nunc ultricies enim in quam. Condimentum venenatis,
            nisl vel purus tellus sem odio aliquet in nisi felis a fermentum,
            urna a a lacinia luctus. Ollicitudin tempus, bibendum non
            scelerisque fusce gravida mauris lorem ipsum suspendisse, euismod
            dolor sit amet imperdiet felis a. Volutpat purus, vehicula dui vel
            dolor in donec pellentesque sapien justo vulputate, nullam ut
            venenatis rhoncus erat tortor. Tortor quis, sapien nec commodo
            hendrerit facilisis suspendisse odio leo accumsan, et aenean ut
            porttitor. Imperdiet nunc, a lacinia bibendum finibus quis ut nisl
            mauris in ex sem mauris molestie, fringilla eget et elit suscipit.
            Quis odio elementum, volutpat in ex sem id mauris dignissim nulla
            consequat, libero sed tellus erat egestas.
          </p>
          <p>
            Etiam sit amet, nunc iaculis molestie curabitur nullam tristique id
            dolor, erat id nec ipsum vestibulum. Eget sit amet, nulla a volutpat
            elit dui molestie accumsan sed, mattis proin purus consequat. Sit
            amet rhoncus, ligula odio morbi pretium accumsan tristique augue
            aliquam pharetra, quam quisque arcu nulla. Metus luctus, urna
            posuere sagittis aenean sem lobortis felis fermentum, in donec
            libero viverra auctor. Phasellus sed, sed nunc ut enim et tincidunt
            lectus quis aliquet quis commodo, at ut hendrerit et nisl sed
            porttitor. Vivamus proin, id dolor magna et volutpat in nisi aliquet
            lectus cursus, nunc ultricies enim in quam. Condimentum venenatis,
            nisl vel purus tellus sem odio aliquet in nisi felis a fermentum,
            urna a a lacinia luctus. Ollicitudin tempus, bibendum non
            scelerisque fusce gravida mauris lorem ipsum suspendisse, euismod
            dolor sit amet imperdiet felis a. Volutpat purus, vehicula dui vel
            dolor in donec pellentesque sapien justo vulputate, nullam ut
            venenatis rhoncus erat tortor. Tortor quis, sapien nec commodo
            hendrerit facilisis suspendisse odio leo accumsan, et aenean ut
            porttitor. Imperdiet nunc, a lacinia bibendum finibus quis ut nisl
            mauris in ex sem mauris molestie, fringilla eget et elit suscipit.
            Quis odio elementum, volutpat in ex sem id mauris dignissim nulla
            consequat, libero sed tellus erat egestas.
          </p>
        </div>
      </ViewLayout>
    </PageLayout>
  );
};

export default Settings;
