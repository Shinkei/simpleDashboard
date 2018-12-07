import React from 'react';
import StyledRevision from './styledComponents/StyledRevision';

const Revision = () => (
  <StyledRevision>
    <div className="subtitle left-padding"><h2>INVOICE-REVISION</h2></div>
    <div className="revision-container">
      <table className="right-border left-padding right-padding top-padding">
        <tr>
          <td>Invoice #</td>
          <td className="right-align"><strong>33-0092kk00</strong></td>
        </tr>
        <tr>
          <td>Date</td>
          <td className="right-align"><strong>7/31/18</strong></td>
        </tr>
        <tr>
          <td>Due Date</td>
          <td className="right-align"><strong>7/31/18</strong></td>
        </tr>
        <tr>
          <td>Terms</td>
          <td className="right-align"><strong>Net 0</strong></td>
        </tr>
      </table>
      <h3 className="right-border zero-margin left-padding top-padding">Bill To</h3>
      <div className="left-padding top-padding">
        <h3 className="zero-margin">New Balance upon Re-booking</h3>
        <p className="price"><strong>$452.45</strong></p>
      </div>
    </div>
  </StyledRevision>
)

export default Revision;