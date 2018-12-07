import styled from 'styled-components';

const StyledHeader = styled.header`
  display:grid;
  grid-template-columns: 1fr 5fr 5fr;
  background-color:#fff;
  border-bottom:solid 1px #f4f4f4;

  a{
    color: #434343;
    text-decoration:none;
    margin:10px;
    &:hover {
      color: #0eb2db;
    }
  }

  img{
    width:100px;
  }

  div{
    padding-top:55px;
    font-size:20px;
  }

  .right-nav{
    text-align:right;
    font-size:45px;
    padding-top:37px;
    a{
      margin-left:27px;
      color:#999;
    }
    .selected{
      color:#434343;
    }
  }

  .dropd{
    margin-left:27px;
  }


`;

export default StyledHeader;