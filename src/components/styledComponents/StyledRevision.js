import styled from 'styled-components';

const StyledRevision = styled.div`
  background-color: #fff;
  border: solid 1px #f3f5f7;
  margin-bottom:10px;

  td{
    padding-bottom:10px;
  }
  .revision-container{
    display:grid;
    grid-template-columns: 1fr 2fr 1fr
  }

  .basic-info-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
  }

  .subtitle{
    border-bottom: solid 1px #e7e7e7;
  }

  .left-padding{
    padding-left:20px;
  }
  .right-padding{
    padding-right:20px;
  }
  .top-padding{
    padding-top: 10px;
  }

  .zero-margin{
    margin:0;
  }

  .right-border{
    border-right: solid 1px #e7e7e7;
  }

  .price{
    color:#ff9f0f;
    font-size:20px;
  }

  .right-align{
    text-align:right;
  }
`;

export default StyledRevision;