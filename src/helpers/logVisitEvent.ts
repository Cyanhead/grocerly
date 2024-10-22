import { logEvent } from 'firebase/analytics';
import { analytics, db } from '../context/Firebase';
import { VisitEvent } from '../types/events';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { generateUniqueId } from './generateId';

const VISIT_LOG_KEY = 'last-visit-log-timestamp';
const VISIT_LOG_INTERVAL = 60 * 60 * 24 * 1000; // 1 day in milliseconds

export async function logVisitEvent() {
  const lastLog = localStorage.getItem(VISIT_LOG_KEY);
  const now = Date.now();

  // Don't log the visit event if the last visit was less than 24 hours ago
  if (lastLog && now - parseInt(lastLog, 10) < VISIT_LOG_INTERVAL) {
    return;
  }

  logEvent(analytics, 'site_visit');

  const eventData: VisitEvent = {
    sessionId: generateUniqueId(),
    timestamp: serverTimestamp(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
  };

  try {
    await addDoc(collection(db, 'event-logs', 'user', 'visits'), eventData);
  } catch (error) {
    console.error('Firebase sign in error', error);
  }

  localStorage.setItem(VISIT_LOG_KEY, now.toString());
}
