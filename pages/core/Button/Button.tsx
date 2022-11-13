import styled from '@emotion/styled';

interface ButtonStyleProps {
  primary?: boolean;
  secondary?: boolean;
}
export const Button = styled.button<ButtonStyleProps>`
  appearance: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%), 0px 1px 4px rgb(0 0 0 / 10%);
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  height: 56px;
  padding: 16px 20px;
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.backgroundColor};

  font-weight: 700;
  font-size: 1.125rem;
  white-space: nowrap;
  color: ${(props) =>
    props.primary
      ? props.theme.colors.secondary
      : props.secondary
      ? props.theme.colors.primaryText
      : props.theme.colors.backgroundColor};
`;
