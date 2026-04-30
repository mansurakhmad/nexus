import { createClient } from '@supabase/supabase-js';

import { KEEP_USER_LOGIN } from '../config';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const customStorage = {
  getItem: (key: string) => {
    const fromLocal = localStorage.getItem(key);
    const fromSession = sessionStorage.getItem(key);
    return fromLocal || fromSession;
  },

  setItem: (key: string, value: string) => {
    const isSavaOldSession = localStorage.getItem(KEEP_USER_LOGIN) === 'true';

    if (isSavaOldSession) {
      sessionStorage.removeItem(key);
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
      sessionStorage.setItem(key, value);
    }
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  },
};

export const api = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: customStorage,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
