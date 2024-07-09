import React from 'react';
import './plan&Pricing.css';
import {Text} from '@/app/core-ui/text/Text';

export interface TableProps {
  data: Array<any>;
  tableHeaders: Array<string>;
  tableBodies: Array<string>;
  stickyHeader?: boolean;
}

function getProperty(obj: any, key: string): any {
  return obj[key];
}

export default function StickyHeadTable({
  data,
  tableHeaders,
  tableBodies,
  stickyHeader = true, 
}: TableProps) {
  return (
    <div className="pricing-table">
      <div className={`table-container ${stickyHeader ? 'sticky-header' : ''}`}>
        <table aria-label="sticky table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <td key={index}>
                  <Text size="normal" title={header} />
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData) => (
              <tr key={rowData.id}>
                {tableBodies.map((body, index) => (
                  <td key={index} className={index === 0 ? 'left-aligned' : ''}>
                    <Text size="small" title={getProperty(rowData, body)} />
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
