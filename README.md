# Complete-React-Tutorial
All course files for the Complete React Tutorial on the Net Ninja YouTube channel.

To use, select the correct branch for each Lesson. E.g for lesson 5 code, select the lesson-5 branch from the drop-down.

useEffect Hooks:

useEffect: Run after every render.
e.g.: useEffect(() =>{
	console.log('use effect run');
          })

useEffect Dependancy: create empty array

e.g.: useEffect(() =>{
	console.log('use effect run');
          },[]);

then this function run only after initial render and when state changes. here no actual 
dependencies in array.

Now add actual dependncies in array: 

When name changes automatically render this name. like watch the name

const Home = () => {

  const [name, setName] = useState('initial name');

  useEffect(() => {
    console.log('use effect ran');
    
  }, [name])

  return (
    <div className="home">

      <button onClick={() => setName('updated name')}>change name</button>
    </div>
  );
}
 

