import { webStore } from './store';

export type WebStateProps = ReturnType<typeof webStore.getState>;
export type WebDispatchProps = typeof webStore.dispatch;
