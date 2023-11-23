export interface Referral {
  id: number;
  'referral event': {
    name: string;
    date: string;
    total: number;
  };
  advocate: {
    position: string;
    email: string;
  };
  friend: {
    position: string;
    email: string;
  };
  'referral status': {
    status: string;
    isFraud: boolean;
  };
}
