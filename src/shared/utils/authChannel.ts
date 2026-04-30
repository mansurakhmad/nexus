export const AUTH_CHANNEL_NAME = 'auth_sync_channel';

export const authChannel = new BroadcastChannel(AUTH_CHANNEL_NAME);

export type AuthMessage = { type: 'LOGIN' } | { type: 'LOGOUT' };
