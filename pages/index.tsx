import {StyledH1} from "./components/shared/Typography/h1";
import {StyledP} from "./components/shared/Typography/p";
import {Box} from "./components/shared/Box/Box";
import {AddressSearch} from "./components/AddressSearch/AddressSearch";

export default function Home() {
  return (
    <div >
      <main >
        <Box>
          <StyledH1>
            Welkom bij de WOZ Check 2022
          </StyledH1>
          <StyledP>
            Voer uw woonadres in om te beginnen.
          </StyledP>
          <AddressSearch/>
        </Box>
      </main>
    </div>
  )
}
