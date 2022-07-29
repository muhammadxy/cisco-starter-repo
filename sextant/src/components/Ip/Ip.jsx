import {useState,useEffect} from 'react';
import axios from 'axios';
import Features from '../feature/Features'
function Ip() {
  //creating IP state
  const [ip, setIP] = useState('');
  const [ip2, setIP2] = useState('');
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
    setIP2(res.data.IPv6)
    
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div>
    <h2 className="display-3 text-uppercase">Checking Ip </h2>
    <Features   name="Your IP Address is with Cisco Technology"/>
    <Features  name={ip}/>
    
    <div>
    <h2 className="display-3 text-uppercase">Checking Ipv6 </h2>
    <Features   name="Your IPv6 Address is with Cisco Technology"/>
   
    <Features  name={ip2}/>
    </div>
    </div>
    
    
  );
}

export default Ip;