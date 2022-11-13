import styled from '@emotion/styled';
import { useStateMachine } from 'little-state-machine';
import { setWozValues } from '../../stateMachine/setWozValues';

interface CircleProps {
  selected?: boolean;
  visited?: boolean;
}

const Circle = styled.div<CircleProps>`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  box-sizing: border-box;
  margin-right: 11px;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.visited
      ? 'rgb(80, 95, 121)'
      : 'rgb(40, 41, 54)'};
  background: ${(props) =>
    props.selected ? 'transparent' : props.visited ? 'rgb(40, 41, 54)' : 'transparent'};
`;

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-width: 200px;
  width: auto;
  transition: all 0.5s ease 0s;
  transform: translate3d(0%, 0px, 0px);
  opacity: 1;
  margin-right: 40px;
`;

interface SideBarItemContainerProps {
  selected?: boolean;
  visited?: boolean;
}

const SideBarItemContainer = styled.span<SideBarItemContainerProps>`
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.visited
      ? 'rgb(80, 95, 121)'
      : 'rgb(40, 41, 54)'};
`;

export default function Sidebar() {
  const {
    state: { step }
  } = useStateMachine();

  return (
    <StyledAside>
      <div>
        <SideBarItemContainer
          selected={step === 'SelectAddress'}
          visited={step === 'ConfirmAddress' || step === 'Result'}
        >
          <Circle
            selected={step === 'SelectAddress'}
            visited={step === 'ConfirmAddress' || step === 'Result'}
          />
          <span>Adresgegevens</span>
        </SideBarItemContainer>
        <SideBarItemContainer selected={step === 'ConfirmAddress'} visited={step === 'Result'}>
          <Circle selected={step === 'ConfirmAddress'} visited={step === 'Result'} />
          <span>Uitslag WOZ check</span>
        </SideBarItemContainer>
        <SideBarItemContainer selected={step === 'Result'}>
          <Circle selected={step === 'Result'} />
          <span>Bezwaar maken</span>
        </SideBarItemContainer>
      </div>
    </StyledAside>
  );
}
