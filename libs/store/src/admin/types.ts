import { adminStore } from './store';

export type AdminStateProps = ReturnType<typeof adminStore.getState>;
export type AppDispatchProps = typeof adminStore.dispatch;
