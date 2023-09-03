import { adminStore } from './store';

export type AdminStateProps = ReturnType<typeof adminStore.getState>;
export type AdminDispatchProps = typeof adminStore.dispatch;
