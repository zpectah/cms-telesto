'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { useCounterSlice } from '@/store';
import { useColorModeContext } from '../../context';
import { LocaleToggle } from '../../components';
import { PageLayout, ViewLayout } from '../../layout';

const Dashboard = () => {
  const { t } = useTranslation();
  const { counter, increment, decrement, incrementByAmount } =
    useCounterSlice();

  const cmc = useColorModeContext();

  return (
    <PageLayout pageKey="dashboard">
      <ViewLayout title="Dashboard" subtitle="Page subtitle">
        <div>
          Dashboard View ... {t('test_title')}
          <br />
          <br />
          <LocaleToggle />
          <br />
          <br />
          <div>
            <h1>Counter: {counter.value}</h1>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => incrementByAmount(23)}>
              Add 23 to value
            </button>
          </div>
          <div>
            <button onClick={() => cmc.toggle()}>theme {cmc.theme}</button>
          </div>
        </div>
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

export default Dashboard;
