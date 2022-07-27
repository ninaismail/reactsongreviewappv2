import axios from "axios";
import {useState, useEffect} from 'react';
function MusicList() {
//  the container is the data we get from the api
const [results,setResults] = useState([])

useEffect(() => {
    fetchData()
  },[])
 function fetchData(){
  axios.request('http://localhost:3001/music').then(function (response) {
    console.log(response.data)
  setResults(response.data)
  }).catch(function (error) {
      console.error(error);
  }); 
  }

  return (
    <div className="App">
 {results.map((item) => 
            (<h1 key={item.id}>
            {item.Name}
            </h1>
        ))}
  </div>           
  );
}
export default MusicList;