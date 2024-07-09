import React from 'react';
import PricingTable from './PricingTable';
import {Text} from '@/app/core-ui/text/Text';

const data = [
  {id: 1, offers: 'Contract', desc1: '$9', desc2: '$10', desc3: '$10'},
  {id: 2, offers: 'Pay Monthly', desc1: '$19', desc2: '$10', desc3: '$10'},
  {
    id: 3,
    offers: 'Full Payment (Saves Over 40%**)',
    desc1: '$49',
    desc2: '$10',
    desc3: '$10',
  },
  {
    id: 4,
    offers: 'Free Maintanence Fee',
    desc1: '✔',
    desc2: '✔',
    desc3: '✔',
  },
  {
    id: 5,
    offers: 'Free Monitoring Fee',
    desc1: '✔',
    desc2: '✔',
    desc3: '✔',
  },
  {
    id: 6,
    offers: 'Free Content Update (every 3 month)',
    desc1: ' - ',
    desc2: '✔',
    desc3: '✔',
  },
  {
    id: 7,
    offers: 'Installation Fee',
    desc1: '$49',
    desc2: '$10 ',
    desc3: 'FREE',
  },
  {
    id: 8,
    offers: 'Free Additional Month',
    desc1: ' - ',
    desc2: '1 Month',
    desc3: '3 Month',
  },
];

const tableHeaders = ['', 'Standard', 'Premium', 'VIP'];

const tableBodies = ['offers', 'desc1', 'desc2', 'desc3'];

const App: React.FC = () => {
  return (
    <section className="pricing-plan">
      <Text size="header" title="RENCANA DAN HARGA" className="pricing-title" />
      <PricingTable
        data={data}
        tableHeaders={tableHeaders}
        tableBodies={tableBodies}
        stickyHeader={false}
      />
    </section>
  );
};

export default App;
