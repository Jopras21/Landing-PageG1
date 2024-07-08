import React from 'react';
import './plan&Pricing.css';
import {Text} from '@/app/core-ui/text/Text';

export interface TableProps {
  data: Array<any>;
  tableHeaders: Array<string>;
  tableBodies: Array<string | {base: string; icon?: string}>;
  stickyHeader?: boolean; // Add a prop to control sticky header behavior
}

function getProperty(obj: any, key: string): any {
  return obj[key];
}

export default function PricingTable({
  data,
  tableHeaders,
  tableBodies,
  stickyHeader = true, // Set a default value for stickyHeader
}: TableProps) {
  return (
    <div className="pricing-table">
      <div className={`table-container ${stickyHeader ? 'sticky-header' : ''}`}>
        <table aria-label="sticky table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <td key={index} className={index === 0 ? 'no-border' : ''}>
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData) => (
              <tr key={rowData.id}>
                {tableBodies.map((body, index) => (
                  <td key={index} className={index === 0 ? 'no-border' : ''}>
                    {typeof body === 'string' ? (
                      getProperty(rowData, body)
                    ) : (
                      <Text size="small" title={rowData[body.base]} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
