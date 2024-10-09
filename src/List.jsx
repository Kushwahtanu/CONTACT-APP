import Contactdetail from "./Profile"


let data = [

    {
        id: 123,
        name: "tanisha kuswah",
        number: 6260446598
    },


    {
        id: 124,
        name: "manisha kuswah",
        number: 6260446593
    },

    {
        id: 125,
        name: "monika khade",
        number: 6260446592
    },

    {
        id: 126,
        name: "avantika",
        number: 6260446591
    },
]

export default function Contact() {
    return (
    <div>
     {   
        data.map((c)=> <Contactdetail
        
        key = {c.id}
        name = {c.name}
      
               
        
        />

        )
     


     }   
    </div>
)
}