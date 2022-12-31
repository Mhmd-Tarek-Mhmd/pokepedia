import "./app.css";
import Main from "../layouts/Main";
import Header from "../layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-black dark:text-white">App</h1>
      </Main>
    </>
  );
}

export default App;
