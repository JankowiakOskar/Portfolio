import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
`;

const GridList = ({ children }) => {
  return <Grid data-grid-technology>{children}</Grid>;
};

export default GridList;
