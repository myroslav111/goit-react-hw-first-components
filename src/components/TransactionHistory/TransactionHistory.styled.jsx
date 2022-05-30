import styled from '@emotion/styled';

export const TableContainer = styled.table`
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;

  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
`;

export const Thead = styled.thead`
  background-color: #323c50;
`;

export const Trow = styled.tr`
  &:nth-child(odd) {
    background-color: #323c50;
  }
  &:nth-child(even) {
    background-color: #2c3446;
  }
  &:hover {
    background-color: #464a52;
    -webkit-box-shadow: 0 6px 6px -6px #0e1119;
    -moz-box-shadow: 0 6px 6px -6px #0e1119;
    box-shadow: 0 6px 6px -6px #0e1119;
  }
`;

export const Tcells = styled.th`
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  background-color: #1f2739;
`;

export const Ttitle = styled.h1`
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
`;

export const TrowHistory = styled.tr`
  &:nth-child(even) {
    background-color: #2c3446;
  }
  &:nth-child(odd) {
    background-color: #323c50;
  }
`;

export const Tdata = styled.td`
  &:first-child {
    color: #fb667a;
  }
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  &:hover {
    background-color: #fff842;
    color: #403e10;
    font-weight: bold;

    box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
      #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;
