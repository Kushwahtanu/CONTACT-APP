
function Contact(){

    return (
        
        <div>
             
       
<h1 className="ml-40 mt-10 bg"> CONTACT APP</h1>
  <div class="container flex  border-2 rounded-2xl  h-96 mx-20 my-20 w-2/5 shadow-xl shadow-slate-700 ">
        <div class="main w-1/2 rounded-l-xl rounded-b-xl bg-blue-200">
            <div class="search flex">
                <div class="div text-blue-950 font-extralight mx-5 my-2 text-xl"><i
                        class="fa-solid fa-magnifying-glass"></i></div>
                        <br />
                <input type="text" class="serch border flex items-center border-blue-950 text-blue-950 mx-1 my-2 rounded-xl p-2"
                    placeholder="Search Number"/>
            </div>
        </div>
        <div class="sidebar p-4">
        <h1 className=" ml-5 text-center text-2xl font-semibold">Add New Number</h1>
            <br/><br/>
          <p className="font-serif mb-2 text-xl"> Enter  Name</p>  <input type="text" placeholder="Enter-Name" className=" bg-zinc-100 ml-5 p-2 border border-black rounded-xl" />
           <br /><br/>
          <p className="font-serif mb-2 text-xl"> Enter Mobile No.</p><input type="text" placeholder="Enter -Number" className=" ml-5  bg-zinc-100 p-2 border border-black rounded-xl" />
          <br /><br />
          <button className="px-10 py-3 bg-green-600 hover:bg-green-500 rounded-sm text-white ml-16">Add</button>
        </div>
    </div>
</div>

 
           
        


        
        
    )

}
export default Contact