
import {useState, useEffect} from 'react'
import './about.css'

function About() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => 
            {setTime(new Date());}, 1000);

        return () =>{clearInterval(timer);} 
    }, []);

    function timeFormat(){
        let hours =time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`


    }

    function padZero(number){
        return (number < 10 ? "0" :"") + number;
    }

    return(
        <>
        <div className="about-page">
            
            <h1>Would You Look at the Time!</h1> 
        <div className="clock-container">
            <div className="clock">
                
                <h1>{timeFormat()}</h1>
            </div>
        </div>

           <h3>Theres No time like the present to have us help you move into your dream home with the speed of a shooting star!<br/>
            We are a costumer orientated ultra-fast moving van delivery service here to make sure that your the transition<br/>
            bewteen your old house and you new house is fast and seamless as possible! putting the <em>Star</em> in <em>SuperStar Movers</em>! </h3> 
           <h3> please feel free to go to our pricing section to see our selection of readily available and ever affordable services</h3>
           <h2>Or</h2>
           <h3>Contact us via our contact list to find out more about our services and how we can get you going!</h3>
        </div>

        
        </>

    )
}

export default About;