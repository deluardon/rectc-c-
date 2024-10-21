import { useState } from "react";



 
   

    const Country = ({ country }) => {
        const [visited, setVisited] = useState(false); // State to track visit status
        const { name, flags } = country;
        console.log(Object.keys(country));
        console.log(Object.values(country));
        console.log(typeof country);
        const handelClick = () => {
            setVisited(prevVisited => !prevVisited); // Toggle the visited state
        };
    
        return (
            <div className="h-[200px]">
                <div className="flex gap-6 border">
                    <div className="border">
                        <h1 className="text-2xl">{name.common}</h1>
                        <p>{name.nativeName.official}</p>
                        <button onClick={handelClick}>Visited</button>
                        <p>{visited ? 'You have visited' : 'You have not visited'}</p>
                    </div>
                   <div> <img className="h-[150px]" src={flags.png} alt="" /></div>
                </div>
            </div>
        );
    }
    
    export default Country;
         


