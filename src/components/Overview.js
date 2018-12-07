import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import StyledOverview from './styledComponents/StyledOverview';

const Overview = () => (
  <StyledOverview>
    <div className="subtitle left-padding"><h2>OVERVIEW</h2></div>
    <div className="overview-container">
      <table className="left-padding right-border right-padding top-padding">
        <tr>
          <td>Status</td>
          <td className="right-align green"><strong><span><FontAwesomeIcon icon={faCheck}/></span> Active</strong></td>
        </tr>
        <tr>
          <td>Method</td>
          <td className="right-align"><strong>Multimodal</strong></td>
        </tr>
        <tr>
          <td>Capacity</td>
          <td className="right-align"><strong>LCL</strong></td>
        </tr>
        <tr>
          <td>Drayage</td>
          <td className="right-align"><strong>Pickup, Delivery</strong></td>
        </tr>
      </table>
      <table className="left-padding right-padding top-padding">
        <tr>
          <td>Incoterms</td>
          <td className="right-align"><strong>FOB</strong></td>
        </tr>
        <tr>
          <td>Service Options</td>
          <td className="right-align"><strong>Deconsolidation, Custom Clearance</strong></td>
        </tr>
        <tr>
          <td>Hazardous or Forbidden commodities</td>
          <td className="right-align"><strong>Lithium Bateries, Hazmat, Other</strong></td>
        </tr>
      </table>
    </div>
  </StyledOverview>
)


export default Overview;