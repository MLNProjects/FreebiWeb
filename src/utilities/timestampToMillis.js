import { firestore } from 'firebase';

export const objToTimestamp = obj => new firestore.Timestamp(obj.seconds, obj.nanoseconds);

export const timestampToMillis = obj => new firestore.Timestamp(obj.seconds, obj.nanoseconds).toMillis();
