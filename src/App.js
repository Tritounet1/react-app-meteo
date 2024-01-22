import './App.css';

function App() {

  const data = [
    {
      id: 1,
      name: "test1",
    },
    {
      id: 2,
      name: "test2",
    },
    {
      id: 3,
      name: "test3",
    }
  ];

  return (
    <div>
      
      {data.map((value, index) => {
          return(
            <div key={index}>
              <p> name: {value.name} </p>
            </div>
          );
      })}

    </div>
  );

}

export default App;