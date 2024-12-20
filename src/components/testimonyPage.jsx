import React,{useState} from 'react'
import "../styles/testimonyPage.css"

const TestimonyPage = () => {

const testimony =[{id:1,name:"kingsley Unegbu",text:"",img:'',position:""},{id:2,name:"kingsley Unegbu",text:"",img:'',position:""},{id:3,name:"kingsley Unegbu",text:"",img:'',position:""},{id:4,name:"kingsley Unegbu",text:"",img:'',position:""},{id:5,name:"kingsley Unegbu",text:"",img:'',position:""},{id:6,name:"kingsley Unegbu",text:"",img:'',position:""},{id:7,name:"kingsley Unegbu",text:"",img:'',position:""},{id:8,name:"kingsley Unegbu",text:"",img:'',position:""},{id:9,name:"kingsley Unegbu",text:"",img:'',position:""},{id:1,name:"kingsley Unegbu",text:"",img:'',position:""},{id:2,name:"kingsley Unegbu",text:"",img:'',position:""},{id:3,name:"kingsley Unegbu",text:"",img:'',position:""},{id:4,name:"kingsley Unegbu",text:"",img:'',position:""},{id:5,name:"kingsley Unegbu",text:"",img:'',position:""},{id:6,name:"kingsley Unegbu",text:"",img:'',position:""},{id:7,name:"kingsley Unegbu",text:"",img:'',position:""},{id:8,name:"kingsley Unegbu",text:"",img:'',position:""},{id:9,name:"kingsley Unegbu",text:"",img:'',position:""},{id:1,name:"kingsley Unegbu",text:"",img:'',position:""},{id:2,name:"kingsley Unegbu",text:"",img:'',position:""}]

 // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Define how many items per page
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(testimony.length / itemsPerPage);

    // Get the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimony.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);




      return (
    <div>

        <div className='ExSucc'>
        <div  className='ExSucc3'>Explore <span className='ExSucc3' style={{color:"#38e3cb"}}>Success Stories</span></div>
        <p className='LHO'>Learn how other are using Adane for project building </p>

        <div className='GBD4' style={{padding:"0"}}>

            <div className='BlogDet'>
                <div className='BlogDet1'>
                     <img src="/img/blogk.jpg" alt=""  className='yuri'/>
                     </div>
                <div className='BlogDet2'>
                    
                    
                    <p className='comesd'>"Becoming a CEO is not really easy to say, it hard work energy skill commitment love passion and the will desire to move ahead"</p>
                    <div className='poky'>Chukwubuike Kingsley - <span className='poky1'>Software developer at Adane</span></div>
                    <div>Read case study</div>
                </div>
            </div>

           

        </div>

        <div className='MCST'>More Customer Stories</div>
        <div className='ExSucc1'>
  {currentItems.map((app)=>(
        <div className="earnSayPp" key={app.id}>
  <div className='sHe1'></div>
  <img src="/img/eme1.svg" alt="" className='sHe'/>
  <p className="partnerShip">"Adane Tech transformed our vision into a stunning, functional app."</p>
  <div className="favourPath">
    <div><img src="/img/amf.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Femi Savie</div>
      <div className="country">CHIBEST Cookies</div>
     </div>
  </div>
</div>
))}
</div>

<div className='PageNMe'>  <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul></div>

        
</div>



    </div>
  )
}

export default TestimonyPage;