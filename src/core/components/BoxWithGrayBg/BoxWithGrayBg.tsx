import styled from '@emotion/styled';

export const BoxWithGrayBg = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 24px;
  margin-top: 8px;
`;
