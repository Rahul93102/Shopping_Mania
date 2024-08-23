UseEffect() ==> A React hooks that tells React do some code when (picks one) 
1) This component Renders
2) This component mounts
3) This state of a value

useEffect(function,[dependencies])
Mounting: When a component is created and inserted into the DOM, it is said to be "mounted". 

1) useEffect(() => { } )  ---> Runs after every re-render
2) useEffect(() => {},[]) ---> Runs only mount
3) useEffect(() =>{ },[value]) -->  Runs on mount + when value changes

USES
#1 Event Listners
#2 DOM  MANIPULATION
#3 Subscription (real-time updates)
#4 Fetching data from an api
#5 Clean up when a component unmounts.

