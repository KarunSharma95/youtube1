import Button from "./Button"
const name = ["All","Mixes", "Cameras","Javascript","Data Structures","Music","News","Live","Flight","T-Series","Electrical Engineering","Automation Test"]

const Buttonlist = () => {
  return (
    <>
   {name.map((name)=>{return <Button name1={name}/>})}
    </>
  )
}

export default Buttonlist