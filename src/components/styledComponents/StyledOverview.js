import styled from 'styled-components';

const StyledOverview = styled.div`
    background-color: #fff;
    border: solid 1px #f3f5f7;
    margin-bottom:10px;

  td{
    padding-bottom:10px;
  }

  .overview-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
  }

  .subtitle{
    border-bottom: solid 1px #e7e7e7;
  }
  .left-padding{
    padding-left:20px;
  }
  .right-border{
    border-right: solid 1px #e7e7e7;
  }
  .right-align{
    text-align:right;
  }
  .right-padding{
    padding-right:20px;
  }
  .top-padding{
    padding-top: 10px;
  }
  .green{
    color: #16d072;
  }
`;

export default StyledOverview;