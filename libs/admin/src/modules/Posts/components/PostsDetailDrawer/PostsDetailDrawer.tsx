import React from 'react';
import { Button } from '@mui/joy';
import { DetailDrawer } from '../../../../components';

export interface PostsDetailDrawerProps {
  open: boolean;
  onClose: () => void;
  id: number | string | undefined;
}

const PostsDetailDrawer = (props: PostsDetailDrawerProps) => {
  const { open, onClose, id } = props;

  const detailMeta = {
    title: 'Detail title',
    actions: (
      <>
        <Button>Primary</Button>
        <Button>Secondary</Button>
        <Button>Cancel</Button>
      </>
    ),
  };

  return (
    <DetailDrawer open={open} onClose={onClose} {...detailMeta}>
      PostsDetailDrawer ... id:{id}
      <br />
      <p>
        Ullamcorper suspendisse, luctus mauris ornare porttitor nunc iaculis
        imperdiet, nunc tortor quam sapien. Rutrum dui et tempus, arcu bibendum
        commodo augue mi orci quis orci quis, vitae consectetur tortor a.
        Sollicitudin lorem, pretium accumsan adipiscing placerat nibh maximus
        aliquam curabitur sollicitudin, in ex sem nisl vel purus quis orci
        lectus. Quis fringilla, condimentum mollis venenatis interdum metus
        mauris eu curabitur, risus diam a aliquet auctor. Rhoncus rhoncus at,
        eget lorem lorem fringilla libero vitae quis dui vel placerat, rhoncus
        erat volutpat aliquam lorem fringilla. Lacinia elementum luctus,
        praesent arcu erat id maximus libero scelerisque ut nisl mauris, vivamus
        ut nisl mauris donec aenean. Purus auctor, nisl vel purus porttitor dui
        nec ullamcorper urna molestie, non congue luctus sem ullamcorper. Ligula
        fermentum, felis a aliquet auctor nunc ut enim et rhoncus at nunc
        luctus, elementum luctus volutpat feugiat neque. Phasellus mauris,
        imperdiet bibendum adipiscing fermentum aliquet suspendisse vestibulum,
        quis orci proin vivamus risus. Congue nulla turpis, nunc risus augue dui
        vel dolor sollicitudin accumsan elementum, quam libero euismod
        suspendisse. fringilla dui, euismod sed id tortor tincidunt libero nisi
        nunc vitae fusce vitae, turpis mauris proin at sem. Finibus imperdiet,
        metus pretium accumsan suspendisse efficitur rutrum curabitur bibendum,
        ut hendrerit lectus nunc et.
      </p>
    </DetailDrawer>
  );
};

export default PostsDetailDrawer;
