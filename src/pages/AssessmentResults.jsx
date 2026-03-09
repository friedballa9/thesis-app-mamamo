import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AssessmentResults(){

  return(
    <div className="container">

      <Sidebar/>

      <div className="main">

        <Topbar/>

        <h1>Assessment Results</h1>

        <p>PHQ-9 Score: 7 (Mild)</p>
        <p>GAD-7 Score: 5 (Mild Anxiety)</p>

      </div>

    </div>
  )
}