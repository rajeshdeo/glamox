import React from "react";
import styles from "./FrontPage.module.css";
import Ncarousel from "./Carousel";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router";
const FrontPage = () => {
const navigate=useNavigate()

  const handleClick=()=>{
navigate("/prodlist")
  }
  return (
    <div className={styles.front_page_container}>
      <div className={styles.caurosel_part}>
        <Ncarousel />
      </div>
      {/* Biggest Payday Discount================================= */}
      <br />
      <br />
      <br />
      <h1 className={styles.big}>Biggest PayDay Discounts</h1>

      <div className={styles.biggest_day_container}>
        <div onClick={handleClick}>
          <img className="biggest_day_divs"
            src="https://images-static.nykaa.com/uploads/be8647b2-3b91-4b4b-955f-1106080b8cd7.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 50% Off</h4>
          <h4 className={styles.greycolor}>Free Kajal on ₹ 899</h4>
        </div>
        <div onClick={handleClick}>
          <img className="biggest_day_divs"
            src="https://images-static.nykaa.com/uploads/6eeacc82-a3af-4640-b859-94135bd711ce.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 40% Off</h4>
          <h4 className={styles.greycolor}>On Makeup Must-Haves</h4>
        </div>
        <div onClick={handleClick}>
          <img className="biggest_day_divs"
            src="https://images-static.nykaa.com/uploads/a9129cc1-5601-4e71-a6e5-fe879ae3deba.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 20% Off</h4>
          <h4 className={styles.greycolor}>On Entire Range</h4>
        </div>
        <div >
          <img className="biggest_day_divs"
            src="https://images-static.nykaa.com/uploads/69e029ea-bf06-48e6-b253-17aa1ca3ac36.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 25 % Off</h4>
          <h4 className={styles.greycolor}>Great Deals On Combos</h4>
        </div>
        <div>
          <img className="biggest_day_divs"
            src="https://images-static.nykaa.com/uploads/54eaae46-ecbc-4643-af79-e97fcb026e78.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 10% Off</h4>
          <h4 className={styles.greycolor}>On Entire Branch</h4>
        </div >
      </div>

      <div className={styles.biggest_day_subcontainer}>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/533fa5f1-8e0a-4f45-b2c2-ba3ec32ff629.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h4 className={styles.hh3}>Up To 35% Off</h4>
          <h4 className={styles.greycolor}>Great Deals On Combos</h4>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/6825ec86-72f0-4389-be14-537b1cd97103.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 30% Off</h3>
          <h3 className={styles.greycolor}>Face Scrub on ₹ 799</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/0a87dd6d-9220-4678-9547-c329fa136d54.jpeg?tr=w-240,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
      </div>

      {/* Biggest Payday Discount=================================ends */}
      <br />
      <br />
      <br />

      {/* small headline start =================*/}
      <div className={styles.small_headline}>
        <img
          src="https://images-static.nykaa.com/uploads/70338135-f026-4824-9c6d-0b8a267d6dbb.jpg?tr=w-2400,cm-pad_resize"
          alt="error"
        />
      </div>
      {/*small headline ends =====================  */}
      <br />
      <br />
      <br />

      {/* stockup category start*/}

      <div className={styles.stockup_container}>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3ecec5a4-7729-4abd-a36c-a34b4e45d067.jpg?tr=w-600,cm-pad_resize"
            alt="error"
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3ecec5a4-7729-4abd-a36c-a34b4e45d067.jpg?tr=w-600,cm-pad_resize"
            alt="error"
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3ecec5a4-7729-4abd-a36c-a34b4e45d067.jpg?tr=w-600,cm-pad_resize"
            alt="error"
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3ecec5a4-7729-4abd-a36c-a34b4e45d067.jpg?tr=w-600,cm-pad_resize"
            alt="error"
          />
        </div>
      </div>
      <br />
      {/* stockup category ends  */}
      
      <br />
      <br />
      
      {/* sale-ary saver start===================== */}
      <h1 className={styles.bigsale}>Sale-ary Savers</h1>

      <div className={styles.sale_ary_saver_container}>
        {/* first part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/38b00c46-1cb7-494e-947f-c3285ee4510d.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/86f26ba4-7533-4fae-a09a-94b1b5962e69.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/7502359d-d0de-4a1f-980d-8a6dbe0632b6.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Best Seller</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/618c8c4c-28b4-44d5-968b-7135c502a902.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/31b55381-072b-4495-a8f7-a3ab9ffc5779.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        {/* second part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3fd4fd3c-9910-4150-8919-431a94ae38f1.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/0a3ff301-caa3-4649-ae28-5d97c5a4e743.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/bc287e7e-14de-47a6-b1a5-2435e9457cfd.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Best Seller</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/4418ed4b-f631-4cd1-bf53-2b2c3c066c63.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3c2127e7-3123-450d-b94e-f69a44f64a9f.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        {/* third part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/1aa0dd08-d0f3-49c9-a575-79585743114f.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3fd4fd3c-9910-4150-8919-431a94ae38f1.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/893c0817-51ea-4c7a-9a77-b16d24abebfd.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Best Seller</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/64332291-6e7f-40ad-a194-9eb5d69f6c6c.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/55d82855-1c99-406c-aef1-c313a79f7a35.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* sale-ary saver ends ===================== */}

      {/* Unbelievable Offers For You starts */}
      <h1 className={styles.bigsale}>Unbelievable Offers For You</h1>

      <div className={styles.sale_ary_saver_container}>
        {/* first part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/139daef7-9ae1-4b67-8c29-90aa5490b4a7.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/9bfbd34b-a2a8-4487-81bf-1956bcbf14a6.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/a48b2381-809f-43cb-9fa4-0549ba6e3bd5.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Best Seller</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/f5461c31-da90-4157-864e-0fa7cfb01d47.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/1f256960-265c-4cb8-89ec-34b260ca92b2.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        {/* second part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/5c608558-c22c-48e3-827f-3dc4e0865040.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/b9f09ff2-7eb5-4472-9e74-f50dece8a396.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/649894e5-6b72-4628-b327-7814dba0d644.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Liquid Lipsticks & Tints</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/9c911966-367b-454a-bcf7-7404bd52c917.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/f9a0e678-6e22-43b8-9361-aa27db77b711.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        {/* third part */}
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/7aafbbb7-769e-4652-a2aa-fa9655951618.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/23eff34c-8021-486f-a335-147d7c08d4d0.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Free Hair Masks</h3>
          <h3 className={styles.greycolor}>On ₹ 1499+ </h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/ed2172a3-0e79-4767-abbc-cbfd9402cabe.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 20% Off</h3>
          <h3 className={styles.greycolor}>On Best Seller</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/861633c2-251a-468f-9639-99e688ab8c7a.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25 % Off</h3>
          <h3 className={styles.greycolor}>Free Scrum on ₹ 899</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/ecb0207f-bf05-4727-8e28-255b637fe111.jpeg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>Flat 50% OFF On Super Serums</h3>
        </div>
      </div>

      {/* Unbelievable Offers For You ends */}

      <div className={styles.super_saving_zone}>
        <img
          src="https://images-static.nykaa.com/uploads/a00b5c11-f6b5-459b-9adb-efeac38a27b0.png?tr=w-2400,cm-pad_resize"
          alt="err"
        />
      </div>
      <br />
      <br />
      <br />
      {/* House of the nykaa starts*/}
      <h1 className={styles.big}>House of the Glamox</h1>
      <div className={styles.house_nykaa}>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/cc32e7ba-4f8d-443c-ad57-3893dc80931d.jpg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 25% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/9f576b75-8141-4e23-b993-30cf9bcf85d8.jpg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 70% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/d39a7619-ae40-492f-a1b7-ad75c1a3acb7.jpg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 70% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/06292f18-010d-4849-93ed-eb6483e2c594.jpg?tr=w-480,cm-pad_resize"
            alt="error"
          />
          <h3 className={styles.hh3}>Up To 50% Off</h3>
          <h3 className={styles.greycolor}>On Entire Range</h3>
        </div>
      </div>

      {/* House of the nykaa ends */}

      {/* shop all starts */}
      <div className={styles.shop_all} onClick={handleClick}>
        <img
          src="https://images-static.nykaa.com/uploads/0e4e8e7e-af62-4bb1-9f89-f17e45908f12.png?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      {/* shop all ends */}
    </div>
  );
};

export default FrontPage;
