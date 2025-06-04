import Routes from "./routes";
import { Header, Main } from "./layouts";

function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes />
      </Main>
    </>
  );
}

export default App;
