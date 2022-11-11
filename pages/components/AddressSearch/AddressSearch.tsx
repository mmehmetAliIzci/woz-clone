
import {StyledH2} from "../shared/Typography/h2";
import styled from "@emotion/styled";

const AddressSearchWrapper = styled.div`
  border-radius: 8px;
  background: rgb(235, 236, 240);
  padding: 16px;
  min-height: 88px;
  display: flex;
`

export const AddressSearch = () => {
  return <>
    <StyledH2>
      Woonadres
    </StyledH2>
    <AddressSearchWrapper>
      <input/>
      <button>Volgende</button>
    </AddressSearchWrapper>

  </>
}
