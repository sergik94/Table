import styled from 'styled-components';

import { PropsP } from '../../types/PropsP';

export const STable = styled.table`
  border-collapse: collapse;
  font-size: 14px;

  & td,
  th {
    font-weight: 500;
    padding: 10px 20px 10px 0;
    text-align: left;
  }

  & tr {
    border-bottom: 1px solid #ddd;
  }
`;

export const STHead = styled.thead``;

export const STHeadTR = styled.tr`
  height: 40px;
`;

export const STH = styled.th``;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr``;

export const STD = styled.td`
  vertical-align: top;
  width: ${(props) => props.width};
`;

export const SData = styled.p<PropsP>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding: ${(props) => props.padding};
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
