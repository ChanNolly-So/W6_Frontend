
import Header from "./components/Header";
import Scores from "./components/Scores"
import { HTML_RESULTS, JAVA_RESULTS,PYTHON_RESULTS, ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
       <Header batchName="Fake Batch"/>
      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS}/>
        <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}/>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
