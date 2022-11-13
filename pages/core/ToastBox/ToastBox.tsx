import styled from '@emotion/styled';

interface ToastBoxStyleProps {
  warning?: boolean;
  success?: boolean;
  information?: boolean;
}

// Not dark-white themed
export const ToastBox = styled.div<ToastBoxStyleProps>`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.warning
      ? 'rgb(255, 153, 31)'
      : props.success
      ? 'rgb(36, 194, 127)'
      : props.information
      ? 'rgb(82, 130, 206)'
      : props.theme.colors.gray};
  color: rgb(255, 255, 255);
  margin: 24px 0px;
  display: flex;
  justify-content: space-between;
`;
