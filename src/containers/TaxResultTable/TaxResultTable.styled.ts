import styled from "styled-components";

export const TaxResultTableContainerStyled = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow-x: auto;
`;

export const TaxResultTableStyled = styled.div`
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  background: grey;
  flex: 1;
  display: grid;
  grid-column-gap: 8px;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  min-width: 380px;
`;

export const TaxResultTableHeaderStyled = styled.p`
  margin: 0;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TaxResultTableCellStyled = styled.p`
  margin: 0;
  padding: 4px 8px;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TaxResultTableCellTitleStyled = styled(TaxResultTableCellStyled)`
  font-weight: bold;
`