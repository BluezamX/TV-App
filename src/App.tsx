import { Container } from "@mui/material";
import UpdateDatabasePage from "./pages/UpdateDatabasePage";


function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          TV-App v0.08
        </header>
      </div>
      {UpdateDatabasePage()}
    </Container >
  );
}

export default App;

