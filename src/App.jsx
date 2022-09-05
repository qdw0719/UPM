import axios from 'axios';
import './App.css';

function App() {

  const selectTest = () => {
    axios({
      url: "/upm/main/get",
      method: "GET",
      header: {
        // 'Accept':'application/json',
        'Content-Type':'application/json'
      },
      data: {
        seq: 1
      }
    }).then((response) => console.log(response))
    .catch((err) => {console.log(err)});
  };


  
  return (
    <div className="App">
      <p>Created by Park Young Jun</p>

      <button onClick={selectTest}>Select Test</button>
    </div>
  );
}

export default App;
