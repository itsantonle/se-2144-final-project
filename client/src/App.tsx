import { Stage, Container } from "@pixi/react"
import Header from "./components/Header"
import "./bootstrap/bootstrapSass.scss"
import PetContainer from "./components/PetContainer"
import * as React from 'react';
import Panel from "./components/InteractivePanel"
// import styles from "./components/ui/Styles"

const App: React.FC = () => {
  return (
    <>
    <Container x={160} y={200} >
    <Header />
      <Stage width={800} height={475} options={{ background: 0xD83D }}>
        <Container x={160} y={200}>
          <PetContainer petType="Hydra" petXpos={100} petYpos={50} />
          <PetContainer petType="Capycorn" petXpos={400} petYpos={50} />
        </Container>
      < Panel />
      </Stage>
    </Container>
    {/* <Footer/> */}
    </>
  );
};

export default App;
