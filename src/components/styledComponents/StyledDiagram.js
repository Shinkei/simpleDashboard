import styled from 'styled-components';

const StyledDiagram = styled.div`
  margin-bottom:20px;

  .diagram-container{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color:#fff;
    text-align:center;
    padding-top: 30px;
    padding-bottom: 30px;
    svg{
      border: solid;
      padding: 9px;
      border-radius: 100%;
    }
    hr{
      display: inline-block;
      float: right;
      width: 10%;
      position: absolute;
      margin-top: 18px;
    }
  }

  .button-container{
    display: inline-block;
    float: right;
  }

  .text-center{
    text-align:center;
    font-size:20px;
  }

  .map{
    width:100%;
    height:450px;
  }
`;

export default StyledDiagram;