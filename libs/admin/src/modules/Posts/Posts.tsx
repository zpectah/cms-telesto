import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../config';
import { PageLayout, ViewLayout } from '../../components';
import { PostsDetailDrawer } from './components';

const Posts = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const closeHandler = () => {
    setOpen(false);
    setTimeout(() => {
      router.push(routes.posts.path);
    }, 250);
  };

  useEffect(() => {
    setOpen(!!id);
  }, [id]);

  return (
    <>
      <PageLayout>
        <ViewLayout breadcrumbs heading={{ title: 'Posts' }}>
          Posts module with detail handle ... {id}
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <button onClick={() => router.push(`${routes.posts.path}/1`)}>
              item ... 1
            </button>
            <button onClick={() => router.push(`${routes.posts.path}/2`)}>
              item ... 2
            </button>
            <button onClick={() => router.push(`${routes.posts.path}/3`)}>
              item ... 3
            </button>
            <button onClick={() => router.push(`${routes.posts.path}/4`)}>
              item ... 4
            </button>
            <button onClick={() => router.push(`${routes.posts.path}/5`)}>
              item ... 5
            </button>
          </div>
        </ViewLayout>
      </PageLayout>
      <PostsDetailDrawer id={id as string} open={open} onClose={closeHandler} />
    </>
  );
};

export default Posts;
