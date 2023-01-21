import  "./Footer.css";
import { Icon } from "@iconify/react";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";
// import facebookIcon from "@iconify/icons-ci/facebook";
import youtubeWithCircle from "@iconify/icons-entypo-social/youtube-with-circle";
import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import pinterestFill from "@iconify/icons-akar-icons/pinterest-fill";
export const Footer = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <footer id='footer1'>
        <div class='flex container'>
          <div>
            <div>
              <img src='https://i.imgur.com/inALoaR.png' alt='' id='nykka' />
            </div>
            <a href=''>Who are we?</a>
            <a href=''>Careers</a>
            <a href=''>Authenticity</a>
            <a href=''>Testimonials</a>
            <a href=''>Nykaa CSR</a>
            <a href=''>Responsible Disclosure</a>
            <a href=''>Investor Relations</a>
          </div>
          <div>
            <div>Help</div>
            <a href=''>Contact Us</a>
            <a href=''>Careers</a>
            <a href=''>Frequently asked questions</a>
            <a href=''>Store Locator</a>
            <a href=''>Cancellation & Return</a>
            <a href=''>Shipping & Delivery</a>
            <a href=''>Sell on Nykaa</a>
          </div>
          <div>
            <div>Inspire Me</div>
            <a href=''>Beauty Book</a>
            <a href=''>Nykaa TV</a>
            <a href=''>Nykaa Network</a>
            <a href=''>Buying Guides</a>
          </div>
          <div>
            <div>Quick Links</div>
            <a href=''> Offer Zone</a>
            <a href=''>New Launchesr</a>
            <a href=''>Nykaa Man</a>
            <a href=''>Nykaa Fashion</a>
            <a href=''>Nykaa Pro</a>
            <a href=''>Nykaa femina beauty awards winners 2019</a>
            <a href=''>Sitemap</a>
          </div>
          <div>
            <div>Top Categories</div>
            <a href=''>Makeup</a>
            <a href=''>Skin</a>
            <a href=''>Hair</a>
            <a href=''>Personal Care</a>
            <a href=''>Appliances</a>
            <a href=''>Mom and Baby</a>
            <a href=''>Wellness</a>
            <a href=''>Fragrance</a>
            <a href=''>Natura</a>
            <a href=''>Luxe</a>
          </div>
        </div>
      </footer>
      <footer id='footer2'>
        <div className='flex'>
          <div className='flex'>
            <div className='logo'>
              <img
                src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg'
                alt=''
              />
            </div>
            <div>
              <div className='underline'>FREE SHIPPING</div>
              <div className='text'>On Orders Above ₹499</div>
            </div>
          </div>
          <div className='flex'>
            <div className='logo'>
              <img
                src='https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg'
                alt=''
              />
            </div>
            <div className='logo'>
              <div className='underline'>EASY RETURNS</div>
              <div className='text'>15-Day Return Policy</div>
            </div>
          </div>
          <div className='flex'>
            <div className='logo'>
              <img
                src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg'
                alt=''
              />
            </div>
            <div>
              <div className='underline'>100% AUTHENTIC</div>
              <div className='text'>Products Sourced Directly</div>
            </div>
          </div>
          <div className='flex'>
            <div className='logo'>
              <img
                src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg'
                alt=''
              />
            </div>
            <div>
              <div className='underline'>2400+ BRANDS</div>
              <div className='text'>1.9 Lakh+ Products</div>
            </div>
          </div>
          <div>
            <div id='love'>Show us some love ❤ on social media</div>
            <ul id='ul'>
              <a
                href='https://www.instagram.com/mynykaa/?ref=badge'
                target='blank'
              >
                <Icon icon={instagramWithCircle} color='black' />
              </a>
              {/* <a href='https://www.facebook.com/MyNykaa' target='blank'>
                <Icon icon={facebookIcon} color='black' />
              </a> */}
              <a
                href='https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA'
                target='blank'
              >
                <Icon icon={youtubeWithCircle} color='black' />
              </a>
              <a href='https://twitter.com/MyNykaa' target='blank'>
                <Icon icon={twitterWithCircle} color='black' />
              </a>
              <a href='https://www.pinterest.com/mynykaa/' target='blank'>
                <Icon icon={pinterestFill} color='black' />
              </a>
            </ul>
          </div>
        </div>
      </footer>
      <footer id='footer3'>
        <div>
          <a href=''>Terms & Conditions</a>
          <a href=''>Shipping Policy</a>
          <a href=''>Cancellation Policy</a>
          <a href=''>Terms & Conditions</a>
        </div>
        <div>
          <p>© 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
