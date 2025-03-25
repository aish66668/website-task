// // src/pages/ClientRegister.js
// "use client"
// import React, { useState } from 'react';
// import { useRouter } from "next/navigation"
// import './login.css';

// const MainPage = () => {
  
//   const router = useRouter();

//   const handleNavigation = () => {
//     router.push("/login");
//   };
//   const handleOpening = () => {
//     router.push("/jobOpenings");
//   };
//   return (
//     <div className="container">
//       <div className="left-half" style={{}}><img src="/j2.png" alt="Client Image" /></div>
//       <div className="right-half">
//         <h2 className='recruiter'>Empower your future - whether you're seeking a job or hiring top talent</h2>

//         <div style={{display:"inline",marginRight:"20px",marginTop:"50px"}}><button style={{marginRight:"40px"}} onClick={handleNavigation} className='button'>
//       <p className='text'>Employer</p>
//       <p className='text' style={{fontSize:"20px"}}>Post a Job</p>
//       </button>
//     <button onClick={handleOpening} className='button'>
//       <p className='text'>Candidate</p>
//       <p style={{fontSize:"20px"}} className='text'>Find a Job</p>
//       </button></div>
    
//        </div>
//     </div>
//   );
// };

// export default MainPage;
"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation"
import './login.css';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState("section1");


    const sections = [
      { 
        id: "section1", 
        name: "Distribution Software", 
        content: (
          <div style={{display:"flex"}}>
            <div  style={{marginLeft:"90px",marginRight:"40px"}}> <img src="img8.png" alt="About Inner" className="inner-image"/></div>
           <div style={{margin:"10px"}}>
           
            <div className='text10'>Acumatica Distribution Edition.</div>
            <div className='text11'>The leading distribution ERP software for wholesalers.</div><div className='text12'>This comprehensive solution provides the tools you need to manage your entire business, from sales orders and inventory control to purchasing and customer support. Increase efficiency, reduce errors, and gain a competitive edge with Acumatica's powerful features, including:</div> 
           
            <div className='text13' style={{marginTop:"20px"}}>
            <div><span><img src="img9.png" width={30} height={20}/></span>Real-time inventory tracking</div>
            <div><span><img src="img9.png" width={30} height={20}/></span>Automated order fulfillment</div>
            <div><span><img src="img9.png" width={30} height={20}/></span>Streamlined purchasing processes</div>
            <div><span><img src="img9.png" width={30} height={20}/></span>Enhanced customer support tools</div> 
            <button className='button7'>Read more</button>
            </div>
           
            </div>
          </div>
        ),
          image: "/img10.png"
      },
        
      { 
        id: "section2", 
        name: "Retail/Commerce Software", 
        content: "Explore our Solutions.", 
          image: "/img11.png"
      
      },
      { 
        id: "section3", 
        name: "Manufacturing Software", 
        content: "Check out our Prices.", 
         image: "/img12.png"
      },
      { 
        id: "section4", 
        name: "Print/Promotional Software", 
        content: "Get in touch with us.", 
      image: "/img13.png"
      },
    ];
  
  
  return (
    <div>
    <div className='head'>
      
      <p className='text1' style={{paddingLeft:"30px"}}>InfoSourcing Summit 2025 </p>
      <p className='text1'>Meet Our Cloud ERP Experts at PPAI 2025 - Booth #3954</p>
      <p className='text2' style={{paddingRight:"30px"}}>InfoSourcing Summit 2025 | Early Bird Pricing ends on December 6th!</p>
    </div>
    <div className='header'>
      <div><img src="img1.png" width={400} height={80}/></div>
      {/*  */}
      <nav className="navbar" style={{marginTop:"4px"}}>
      <ul className="nav-links">
        <li className="dropdown">
          <span className='text3'>About <span className="arrow">▼</span></span>
          <ul className="dropdown-menu">
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <span className='text3'>Solutions <span className="arrow">▼</span></span>
          <ul className="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Cloud Services</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <span className='text3'>Pricing <span className="arrow">▼</span></span>
          <ul className="dropdown-menu">
            <li><a href="#">Basic</a></li>
            <li><a href="#">Pro</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <span className='text3'>Resources <span className="arrow">▼</span></span>
          <ul className="dropdown-menu">
            <li><a href="#">Basic</a></li>
            <li><a href="#">Pro</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div style={{background:"white"}}>
  <div><button className='button1'><img src="img2.png" width={30} height={30}/>Acumatica Demo</button></div>  </div>
  <div><button className='button2'><img src="img4.png" width={30} height={30}/>Support</button></div>  
    </div>
    <div style={{display:"flex"}}className='first'>
      <div><div style={{marginLeft:"70px",marginBottom:"30px"}} ><button className='button3'>Saas Software</button></div>
   <div style={{marginLeft:"70px"}}><p className='text4'>MANAGE CLIENTS &</p>
<p className='text5'>TEAMS IN YOUR</p>
<p className='text5'>DIGITAL BUSSINESS</p><div><p className='text6'>We drive digital transformation.Start  </p>
<p  className='text6'> your now.</p></div>
<div className="input-container">
  <input type="text" placeholder="example@gmail.com" className="input-field" />
  <button className="demo-button">Get Demo</button>
 
</div>
<div style={{display:"flex",marginBottom:"35px"}}>
  <img src="check.png" style={{paddingRight:"5px"}} /><div className="q" style={{paddingRight:"20px"}}>Demo Software</div>
  <img src="check.png" style={{paddingRight:"5px"}}/><div className="q">Support</div>
</div>
<div>

  </div>
</div></div>
      <div><img src="img5.png" className='img5' /></div>
      </div>
      <div className='second'>
        <div>
        <p className='text7'>Acumatica Cloud ERP Specialists</p>
    <p className='text8'>Demo our Cloud ERP solution for wholesale distribution, ecommerce,</p> <p className='text8'>brick and mortar, manufacturing and other industries, all in one</p><p className='text8'> software to run your entire business.</p></div>
  <div><button className='button2' style={{margin:"80px"}}>Schedule a demo</button></div>  
    </div>
    <div className='text9'>Our Solutions</div>
    <div>
      {/* Menu Section */}
      <nav className="menu">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`menu-item ${activeSection === section.id ? "active" : ""}`}
            onClick={() => setActiveSection(section.id)}
          >
            <div style={{paddingBottom:"30px",paddingLeft:"50px"}}><img src={section.image}  className="section-image" height={50} width={100} /></div>
           <div>{section.name}</div> 
          </div>
        ))}
      </nav>

      {/* Content Section */}
      <div className="content">
        {sections.map(
          (section) =>
            activeSection === section.id && <div key={section.id}>{section.content}</div>
        )}
      </div></div>
      <div className="container">
  <img src="img14.png" alt="Inline Image" className="inline-image" width={200} height={100} />
  
  <div className="text-box">
    <p className='text20'>Demo Software Get It To Us</p>
    <p className='text21' style={{marginTop:"20px"}}>SEE ACUMATICA IN ACTION</p>
  </div>
  <button className='button2' style={{marginLeft:"40px"}}>Get a demo</button>
</div>
<div >
<div><p className='text23'>Why Choose InfoSourcing, As Your
Cloud Experts?</p>
<p className='text24'>Get the business management system with the highest customer satisfaction rating in the industry.</p>
</div>
<div style={{display:"flex" ,marginLeft:"20px"}} >
  <div>
    <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>We understand your challenges:</span>
    <span className='text27'> We're committed to</span>
    <p className='text26'>helping your business achieve automation and a strong </p>
    <p className='text26'>return on investment.</p> 
    </div>
    {/* <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>We understand your challenges:</span>
    <span className='text27'> We're committed to</span>
    <p className='text26'>helping your business achieve automation and a strong </p>
    <p className='text26'>return on investment.</p> 
    </div> */}
    <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>Proven expertise:</span>
    <span className='text27'> With over 22 years of experience in ERP</span>
    <p className='text26'>implementation and development, we bring deep industry</p>
    <p className='text26'>knowledge to every project.</p> 
    </div>
    <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>Specialized solutions:</span>
    <span className='text27'> As experts in serving custom</span>
    <p className='text26'>boutiques and novelty houses, we tailor our solutions to your</p>
    <p className='text26'>unique business needs.</p> 
    </div>
    <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>Seamless integration:</span>
    <span className='text27'> We excel at integrating ERP systems</span>
    <p className='text26'>with distribution and e-commerce platforms for streamlined</p>
    <p className='text26'>operations.</p> 
    </div>
    <div>
      <span>
        <img src="img16.png"/>
    </span>
    <span className='text25'>Custom development:</span>
    <span className='text27'>Our in-house product development</span>
    <p className='text26'> team can create personalized solutions to meet your exact </p>
    <p className='text26'>requirements.</p> 
    </div>
  </div>
  <div><img src="img15.png"  width={700} height={500}/></div></div>

</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
  <div style={{margin:"50px"}}><button className='button7'>Read more</button></div>
  <div style={{display:"flex",margin:"30px"}}>
<div><p className='text30'>Clients </p><p className='text31'>35+ </p></div>
<div><p className='text30'>Employee </p><p className='text31'>35+ </p></div>
<div><p className='text30'>Years of Experience </p><p className='text31'>35+ </p></div>
<div><p className='text30'>Employee </p><p className='text31'>15+ </p></div> 
</div>
</div>

<div style={{display:"flex",justifyContent:"space-between"}}>
  <div >
    <p className='awards'>Awards &</p><p className='awards'>Accolades</p></div>
  <div style={{display:"flex",marginRight:"30px"}}>
   <div><img src="img18.png" style={{margin:"30px"}}/><p className='textmvp'>MVP-8 years</p><p className='textmvp'>2016-2023</p></div> 
   <div><img src="img19.png" style={{margin:"30px"}}/><p className='textmvp'>MVP-8 years</p><p className='textmvp'>2016-2023</p></div> 
   <div><img src="img20.png" style={{margin:"30px",marginBottom:"40px"}}/><p className='textmvp'>MVP-8 years</p><p className='textmvp'>2016-2023</p></div> 
   <div><img src="img21.png" style={{margin:"30px",marginBottom:"40px"}}/><p className='textmvp'>MVP-8 years</p><p className='textmvp'>2016-2023</p></div>   
     </div>
  </div>
  <div><img src="img17.png" style={{width:"100%"}}/></div>
  <div className='customer' style={{paddingTop:"80px"}}><p className='text23'>Customer Testimonials</p>
<p className='text24'>Get the business management system with the highest customer satisfaction rating in the industry.</p>
<div style={{display:"flex"}}>

  <div className='box'>
    <img src="imgd.png" style={{padding:"20px"}} width={200} height={100}/>
    <p className='boxtext'>I can honestly say that InfoSourcing is one of the most responsive partners that I can remember working with. We’re confident that we made the right decision with Acumatica Printshop and look forward to continuous improvement and scalability as we implement new features and functionality over the coming weeks/months/years. </p>
    <div style={{display:"flex",justifyContent:"space-between"}}><div><p className='boxtext2'>Dustin Raney</p>
    <p className='boxtext'> INk custom tees</p></div><img src="imgf.png" width={30} height={30}/></div>
  </div>
  <div className='box'>
    <img src="imge.png" style={{padding:"20px"}} width={200} height={100}/>
    <p className='boxtext'>M3 Technology Group boosts revenue by 60% by switching to Cloud ERP with SaaS hosted solution. M3 realized it takes lot of effort to customize old legacy systems and worth switching to new Cloud solution, after seeing a few demos and learning about Cloud ERP unlimited user pricing model and its deep customization potential, Burns was convinced.
    </p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div>
      <p className='boxtext2'>Kelly Burns
     </p>
   <p className='boxtext'>  CTO - M3 Technology</p>
   </div><img src="imgf.png" width={30} height={30}/>
  
   </div>
  </div>
</div>

</div>
  <div style={{background:"#021836",display:"flex",height:"400px"}}>
  <div style={{width:"70%",background:"#F37F39",marginTop:"69px",marginBottom:"98px",marginLeft:"15px"}} className='nn'>
    <p className='texta'>Schedule an Acumatica Demo</p>
    <div className='textb'><p>Streamline your business with our comprehensive software solution. Answer a few</p><p> questions to tailor a demo to your needs and see how we can help you manage everything. </p><p> Schedule a free consultation with an ERP expert today.</p></div>
    <button className="demo-button" style={{marginLeft:"50px"}}>Get Demo</button>
    </div> 
  <div style={{width:"24%"}}><img src="img23.png"/></div>
    {/* */}
   
  </div>
  <div className='customer1' style={{paddingBottom:"80px",paddingTop:"80px"}}><p className='text23'>Featured Resources</p>
<p className='text24'>Get the business management system with the highest customer satisfaction rating in the industry.</p>
<div style={{display:"flex",paddingTop:"40px"}}>
<div className="image-container">
  <div className="circle"></div>
  <img src="fileimg.png" alt="Sample Image"  style={{width:"80%",height:"200px",marginLeft:"25px"}}/>

  <div className="download-text">Download Now</div>
</div> <div className="image-container">
  <div className="circle"></div>
  <img src="fileimg.png" alt="Sample Image"  style={{width:"80%",height:"200px",marginLeft:"25px"}}/>
  <div className="download-text">Download Now</div>
</div> <div className="image-container">
  <div className="circle"></div>
  <img src="fileimg.png" alt="Sample Image"  style={{width:"80%",height:"200px",marginLeft:"25px"}}/>
   {/* <img src="download.png" alt="Overlay Image" className="hover-image" />   */}
  <div className="download-text">Download Now</div>
</div>
  <div className="image-container">
  <div className="circle"></div>
  <img src="fileimg.png" alt="Sample Image"  style={{width:"80%",height:"200px",marginLeft:"25px"}}/>
  <div className="download-text">Download Now</div>
</div>

 
  
  </div>
</div>


  <div><img src="img22.png" style={{width:"100%"}}/></div>
  <div className="container1">
      <div ><p className="item">Company</p>
      <div  className='items'> <p>About Inforsourcing</p>
      <p>Print Cloud ERP Software</p>
      <p>Jewelry Cloud ERP Software</p>
      <p>Distribution ERP Software</p>
      <p>eCommerce ERP Software</p>
      <p>eCommerce ERP Software</p>
     </div>
    
      </div>
      <div >
        <p className="item">Resources</p>
      <div  className='items'> 
      <p>Blogs</p>
      <p>Events & Webinars</p>
      <p>Product Videos</p>
      <p>Brochures</p>
      <p>Customer Stories</p>
      <p>eCommerce ERP Software</p>
     </div>
    
      </div>
      <div ><p className="item">Started</p>
      <div  className='items'> 
      <p>Blogs</p>
      <p>Events & Webinars</p>
      <p>Product Videos</p>
      <p>Brochures</p>
      <p>Customer Stories</p>
      <p>eCommerce ERP Software</p>
     </div>
      </div>
        <div className="item"><img src="imga.png" width={400} height={300}/></div>  
     
    </div>
     <div className='head'> 
      
      <p className='text2' style={{paddingLeft:"15px"}}>Terms and Conditions </p>
      <p className='text2' >Privacy Policy</p>
      <p className='text2'>© InfoSourcing Inc. All Rights Reserved.</p> 
       <p className='text2'><span className='items1'>Created by</span>
      <img src="imgc.png" width={20} height={20}/>
      <span className='items2' style={{paddingRight:"15px" }}>Nexevo Technologies</span> </p> 
     </div> 
    </div>
  );
};
 export default MainPage;