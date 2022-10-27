import Navbar from '../Navbar/index'
import Banner from '../Banner/index'
import MediumMenuOptions from '../MediumMenuOptions/index'

import {ContentContainer} from './styledComponent'

const Home = () => (
  <>
    <Navbar />
    <ContentContainer>
      <MediumMenuOptions />
      <Banner />
    </ContentContainer>
  </>
)
export default Home
