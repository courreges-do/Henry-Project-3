import styled from "styled-components";

const ApContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const ApDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
  text-align: center;
`;

const ApType = styled.p`
  font-weight: bold;
`;

export { ApContainer, ApDetail, ApType };
