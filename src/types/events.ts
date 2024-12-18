import { FieldValue, Timestamp } from 'firebase/firestore';

type UserEvent = {
  timestamp: Timestamp | FieldValue;
  userAgent: string;
  pageUrl: string;
};

export type LoginEvent = UserEvent & {
  userId: string;
};

export type VisitEvent = UserEvent & {
  sessionId: string;
};
