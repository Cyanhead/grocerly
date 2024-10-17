import { logEvent } from 'firebase/analytics';
import { analytics, db } from '../context/Firebase';
import { LoginEvent } from '../types/events';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const LOGIN_LOG_KEY = 'last-login-log-timestamp';
const LOGIN_LOG_INTERVAL = 60 * 60 * 24 * 1000; // 1 day in milliseconds

export const logLoginEvent = async (userId: string) => {
  const lastLog = localStorage.getItem(LOGIN_LOG_KEY);
  const now = Date.now();

  // Don't log the login event if the last login was less than 24 hours ago
  if (lastLog && now - parseInt(lastLog, 10) < LOGIN_LOG_INTERVAL) {
    return;
  }

  logEvent(analytics, 'login');

  const eventData: LoginEvent = {
    userId,
    timestamp: serverTimestamp(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
  };

  try {
    await addDoc(collection(db, 'event-logs', 'user', 'logins'), eventData);
  } catch (error) {
    console.error('Firebase sign in error', error);
  }

  localStorage.setItem(LOGIN_LOG_KEY, now.toString());
};
