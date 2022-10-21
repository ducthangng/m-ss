import { lazy } from 'react';

//import file json data
import IntroButton from '../api/IntroButton.json';

import { Styles } from './Styles/styles';
import Header from '../components/Header/Index';
import SideMenu from '../components/Header/SideMenu';

const Container = lazy(() => import('../components/Container/index'));
const ContentBlock = lazy(() => import('../components/contentBlock/index'));

const Landingpage = () => {
  return (
    <Container>
      <Styles />
      <Header />
      <SideMenu />
      {/* <ScrollToTop /> */}
      <ContentBlock
        type="left"
        title={IntroButton.title}
        content={IntroButton.text}
        button={IntroButton.button}
        icon="developer.svg"
        id="intro"
      />
    </Container>
  );
};

export default Landingpage;
