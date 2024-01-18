
import Button from "./Button";


const name = ["Gaming","New", "Vlogs","Javascript","Data Structures","Music","Festival","Comedy","Trip","Cricket","Electrical Engineering","Automation Engineer"]



const Buttonlist = () => {
  
  return (
    <div className="flex">
   {name.map((name,indexes)=>{return <Button key={indexes} name1={name}  />})}
    </div>
  )
}

export default Buttonlist