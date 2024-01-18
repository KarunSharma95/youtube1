import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Menulist = ()=>{
    const isVisible = useSelector((store)=>store.cart.isMenuVisible);
//   console.log(isVisible);
    if(!isVisible) return null;
return(
    <div className="col-span-1">
    <div className="mb-8">

      <Link to="/"><h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZSb6-SeCD8VZIJyvD1m0VeDjBqUiM9Inyw&usqp=CAU"/>Home</h1></Link>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzIxqZnarEBvemH7mX-B1f2WuNJqT74Tcgw&usqp=CAU"/>Shorts</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTr-jH-BTpG0On_c4Np0Pmd7HNW9CEdzbMeg&usqp=CAU"/>Subscription</h1>
    </div>
    <div className="mb-8 border-t-4 " >
        <h1 className="font-bold text-xl">Explore</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqyDdv3ncw5x64Te5E89p7prXLZzeXEGBJQ&usqp=CAU"/>Trending</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iQKctBihhdPVMmMHT9AsR4F8btMGx7PQjw&usqp=CAU"/>Shopping</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOe7rNeoT9ymfguASruPp90XNNqb3wuJC9g&usqp=CAU"/>Music</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1Ue9aQy9IZgzHSubpOmLJo2OxucPLZm93g&usqp=CAU"/>Movie</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQgDyNjA7nHKrkVxpLHia_Xwe-Oenzsj_Eg&usqp=CAU"/>Gaming</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvN9VZc-5lCk2GvKbeV32JmfkGzwVS0KoTtw&usqp=CAU"/>Sports</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheVrQKoIIVqTjxrDxf2acsUwr9REh50NMDQ&usqp=CAU"/>News</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKvwU98VdbZ42Ewa1-bc4KO0UmiZdYMUSe-lZhRl4eKaFAQ7Dn3t68dAsW9w-7ho1VeI&usqp=CAU"/>Learning</h1>
        
    </div>
    <div className="border-t-4">
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVHTzR6VzvrmkJF0pNqmUAoj1Y6m8N5ZDUg&usqp=CAU"/>Settings</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPXJvihMde_FuP3kTRGwotxOxmCREjr0OQw&usqp=CAU"/>Report history</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDP4lltABbWllzjgvuG9q407TQSpIjp-1IA&usqp=CAU"/>Help</h1>
        <h1 className="flex mb-2"><img alt="trending" className="w-4 h-4 self-center mr-3" src="https://cdn-icons-png.flaticon.com/512/813/813419.png"/>Send Feedback</h1>
    </div>
    </div>
)
}
export default Menulist;