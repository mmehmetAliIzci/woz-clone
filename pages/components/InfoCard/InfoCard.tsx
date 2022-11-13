import styled from '@emotion/styled';

export const InfoCardWrapper = styled.div`
  margin-top: 24px;
  & div:not(:first-child) {
    margin-top: 16px;
  }
`;
export const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  min-height: 20px;
`;
export const InfoCardNumber = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
