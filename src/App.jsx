
import Header from "./components/Header";
import Scores from "./components/Scores"
import { HTML_RESULTS} from "./data";
import Statistic from "./components/Statistic";

function App() {
  return (
    <>
       <Header batchName="Fake Batch"/>
      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
       
      </main>
    </>
  );
}

export default App;
