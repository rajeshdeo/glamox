import React from 'react'
import "./FrontPage.css"

const FrontPage = () => {
  return (
    <div className="front_page_container"> 
      <div className="caurosel_part">

      </div>
      {/* Biggest Payday Discount================================= */}
      <h2>Biggest PayDay Discounts</h2>
       
       <div className="biggest_day_container">
        <div>
            <img src="https://images-static.nykaa.com/uploads/be8647b2-3b91-4b4b-955f-1106080b8cd7.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 50% Off</h3>
            <h3 className="greycolor">Free Kajal on ₹ 899</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/6eeacc82-a3af-4640-b859-94135bd711ce.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 40% Off</h3>
            <h3 className="greycolor">On Makeup Must-Haves</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/a9129cc1-5601-4e71-a6e5-fe879ae3deba.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 20% Off</h3>
            <h3 className="greycolor">On Entire Range</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/69e029ea-bf06-48e6-b253-17aa1ca3ac36.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 25 % Off</h3>
            <h3 className="greycolor">Great Deals On Combos</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/54eaae46-ecbc-4643-af79-e97fcb026e78.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 10% Off</h3>
            <h3 className="greycolor">On Entire Branch</h3>
        </div>

       </div>

       <div className="biggest_day_subcontainer">
       <div>
        <img src="https://images-static.nykaa.com/uploads/533fa5f1-8e0a-4f45-b2c2-ba3ec32ff629.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 35% Off</h3>
            <h3 className="greycolor">Great Deals On Combos</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/6825ec86-72f0-4389-be14-537b1cd97103.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 30% Off</h3>
            <h3 className="greycolor">Face Scrub on ₹ 799</h3>
        </div>
        <div>
        <img src="https://images-static.nykaa.com/uploads/0a87dd6d-9220-4678-9547-c329fa136d54.jpeg?tr=w-240,cm-pad_resize" alt="error" />
            <h3>Up To 25% Off</h3>
            <h3 className="greycolor">On Entire Range</h3>
        </div>

       </div>


      {/* Biggest Payday Discount=================================ends */}


    </div>
  )
}

export default FrontPage