import './App.scss';
import Table from './components/Table/Table';

const data = [
  {
    id: 1,
    'referral event': {
      name: 'Purchase',
      date: '06/17/2020 at 7:13 PM PDT',
      total: 120,
    },
    advocate: {
      position: 'Advocate',
      email: 'autouser23926@gmail.com',
    },
    friend: {
      position: 'Friend',
      email: 'fr58272@gmail.com',
    },
    'referral status': {
      status: 'Pending',
      isFraud: false,
    },
  },
  {
    id: 2,
    'referral event': {
      name: 'Purchase',
      date: '07/10/2020 at 4:05 AM PDT',
      total: 100,
    },
    advocate: {
      position: 'Advocate',
      email: 'ad0379118142@gmail.com',
    },
    friend: {
      position: 'Friend',
      email: 'fr0379118142@gmail.com',
    },
    'referral status': {
      status: 'Flagged',
      isFraud: true,
    },
  },
  {
    id: 3,
    'referral event': {
      name: 'Purchase',
      date: '06/09/2020 at 12:42 PM PDT',
      total: 28,
    },
    advocate: {
      position: 'Advocate',
      email: 'ad56991@gmail.com',
    },
    friend: {
      position: 'Friend',
      email: 'fr94250@gmail.com',
    },
    'referral status': {
      status: 'Approved',
      isFraud: false,
    },
  },
  {
    id: 4,
    'referral event': {
      name: 'Purchase',
      date: '08/07/2020 at 4:20 AM PDT',
      total: 100,
    },
    advocate: {
      position: 'Advocate',
      email: 'user.to.be.blocked92187@gmail.com',
    },
    friend: {
      position: 'Friend',
      email: 'user.to.be.blocked2682@gmail.com',
    },
    'referral status': {
      status: 'Blocked',
      isFraud: true,
    },
  },
  {
    id: 5,
    'referral event': {
      name: 'Purchase',
      date: '06/09/2020 at 2:08 AM PDT',
      total: 100,
    },
    advocate: {
      position: 'Advocate',
      email: 'ad0693677382@gmail.com',
    },
    friend: {
      position: 'Friend',
      email: 'fr0693677382@gmail.com',
    },
    'referral status': {
      status: 'Voided',
      isFraud: true,
    },
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Referrals - 345</h1>

      <Table data={data} />
    </div>
  );
}

export default App;
