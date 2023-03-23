import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Ncarousel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel >
      
        <Carousel.Item interval={800}>
          <img style={{cursor:"pointer"}} onClick={()=>navigate('/prodlist/skin')}
            className="d-block w-100"
            src="https://images-static.nykaa.com/uploads/4f4e17c7-d027-4fb3-b311-334584c3f0b3.png?tr=w-2400,cm-pad_resize"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img style={{cursor:"pointer"}} onClick={()=>navigate('/prodlist/makeup')}
            className="d-block w-100"
            src="https://images-static.nykaa.com/uploads/087be75e-8b3d-40f0-bd0a-bef5bfcc8dd3.jpg?tr=w-2400,cm-pad_resize"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img style={{cursor:"pointer"}} onClick={()=>navigate('/prodlist/makeup')}
            className="d-block w-100"
            src="https://images-static.nykaa.com/uploads/67f1d92d-63e9-4a74-b894-0a8004508aba.jpg?tr=w-2400,cm-pad_resize"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img style={{cursor:"pointer"}} onClick={()=>navigate('/prodlist/makeup')}
            className="d-block w-100"
            src="https://images-static.nykaa.com/uploads/d4425100-086e-4106-b82e-6b71ce575dc2.jpg?tr=w-2400,cm-pad_resize"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img style={{cursor:"pointer"}} onClick={()=>navigate('/prodlist/makeup')}
            className="d-block w-100"
            src="https://images-static.nykaa.com/uploads/ec812515-495e-460d-ae52-7eda60e85502.jpg?tr=w-2400,cm-pad_resize"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Ncarousel;