import { FiPhone } from "react-icons/fi";
import { GoComment } from "react-icons/go";

export default function Footer() {
  return (
      <>
          <footer className="bg-white border-top">
              <div className="container px-4 px-lg-0">
                  {/* ---Some links */}
                  <div className="border-bottom d-flex flex-lg-row flex-column align-items-center py-lg-3">
                      <div className="footer-pages-block d-flex flex-grow-1 align-items-center mt-3 mt-lg-0">
                          <a
                              className="text-decoration-none mb-2 mb-lg-0 letter-spacing-0_2"
                              title="Terms &amp; conditions of using Renty Car Rental &amp; Leasing Portal"
                              href="/terms-conditions"
                          >
                              Terms &amp; conditions
                          </a>

                          <a
                              className="text-decoration-none mb-2 mb-lg-0 letter-spacing-0_2"
                              title="Privacy Policy"
                              href="/privacy-policy"
                          >
                              Privacy Policy
                          </a>

                          <a
                              className="text-decoration-none mb-2 mb-lg-0 letter-spacing-0_2"
                              href="/"
                          >
                              Contact us
                          </a>
                      </div>

                      <div className="footer-social-block mb-3 mb-lg-0 d-flex align-items-center justify-content-center">
                          <a
                              target="_blank"
                              href="https://www.youtube.com/@renty_ae"
                              title="Car rental video - Renty YouTube channel"
                          >
                              <img
                                  loading="lazy"
                                  src="https://renty.ae/assets-nd/icons/footer/youtube.svg"
                                  alt="Car rental video - Renty YouTube channel"
                                  title="Car rental video - Renty YouTube channel"
                              />
                          </a>
                          <a
                              target="_blank"
                              href="https://www.instagram.com/renty.ae/"
                              title="Hundreds and thousands of pictures of cars in Dubai"
                          >
                              <img
                                  loading="lazy"
                                  src="https://renty.ae/assets-nd/icons/footer/instagram.svg"
                                  title="Hundreds and thousands of pictures of cars in Dubai"
                                  alt="Hundreds and thousands of pictures of cars in Dubai"
                              />
                          </a>
                          <a
                              target="_blank"
                              href="https://www.facebook.com/carrenty/"
                              title="Visit our Facebook Page, check out our posts and maybe click all the Like buttons."
                          >
                              <img
                                  loading="lazy"
                                  src="https://renty.ae/assets-nd/icons/footer/facebook.svg"
                                  title="Visit our Facebook Page, check out our posts and maybe click all the Like buttons."
                                  alt="Visit our Facebook Page, check out our posts and maybe click all the Like buttons."
                              />
                          </a>
                          <a
                              target="_blank"
                              href="https://www.linkedin.com/company/renty-ae/"
                              title="Connect with Dubai's Car Rental Industry on our LinkedIn Page"
                          >
                              <img
                                  loading="lazy"
                                  src="https://renty.ae/assets-nd/icons/footer/linkedin.svg"
                                  title="Connect with Dubai's Car Rental Industry on our LinkedIn Page"
                                  alt="Connect with Dubai's Car Rental Industry on our LinkedIn Page"
                              />
                          </a>
                          <a
                              target="_blank"
                              title="Find us on Google Maps in Al Quoz, Dubai."
                              href="https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z/data=!4m8!3m7!1s0x3e5f6985ae4b1d7d:0x1fea6bf21aa114ba!8m2!3d25.1608085!4d55.2372231!9m1!1b1!16s%2Fg%2F11h4cqq5n4?hl=en"
                          >
                              <img
                                  loading="lazy"
                                  src="https://renty.ae/assets-nd/icons/footer/google-maps-pin.svg"
                                  alt="Find us on Google Maps in Al Quoz, Dubai."
                                  title="Find us on Google Maps in Al Quoz, Dubai."
                              />
                          </a>
                      </div>
                  </div>

                  {/* ---Location in dubai */}
                  <div className="footer-locations-container justify-content-between d-flex flex-column flex-lg-row border-bottom with-areas pb-3 pt-lg-3">
                      {/* INQUIRIES & SUPPORT */}
                      <div className="d-flex flex-row flex-lg-column">
                          <div className="pt-lg-0 flex-grow-1 flex-lg-grow-0 pt-2">
                              <span className="location-in-dubai fw-bold text-uppercase">
                                  INQUIRIES & SUPPORT
                              </span>

                              <div className="d-flex flex-column mt-1 line-height-25">
                                  <a
                                      href="tel:+971504617277"
                                      className="text-decoration-none mb-1 letter-spacing-0_2 fit-content"
                                  >
                                      <FiPhone className="mr-2" />
                                      +971 50 461 7277
                                  </a>

                                  <a
                                      target="_blank"
                                      href="https://api.whatsapp.com/send/?phone=971558569266"
                                      className="text-decoration-none mb-1 d-flex align-items-center letter-spacing-0_2 fit-content"
                                      title="Contact Renty.ae car rental Whatsapp"
                                  >
                                      <img
                                          loading="lazy"
                                          width="16"
                                          height="17"
                                          className="mr-2"
                                          src="https://renty.ae/assets-nd/icons/site/social-whatsapp-icon.svg"
                                          alt="Contact by Whatsapp"
                                          title="Contact by Whatsapp"
                                      />
                                      WhatsApp
                                  </a>

                                  <a
                                      target="_blank"
                                      href="https://t.me/Renty_official"
                                      className="text-decoration-none mb-1 d-flex align-items-center letter-spacing-0_2 fit-content"
                                      title="Contact Renty.ae car rental Telegram"
                                  >
                                      <img
                                          loading="lazy"
                                          width="16"
                                          height="17"
                                          className="mr-2"
                                          src="https://renty.ae/assets-nd/icons/site/telegram.svg"
                                          alt="Contact Renty.ae car rental Telegram"
                                          title="Contact Renty.ae car rental Telegram"
                                      />
                                      Telegram
                                  </a>
                              </div>
                          </div>
                          {/* For Partnership */}
                          <div className="flex-grow-1 mt-2">
                              <span className="location-in-dubai fw-bold text-uppercase">
                                  For partnership
                              </span>
                              <div className="d-flex flex-column mt-1 line-height-25">
                                  <a
                                      className="text-decoration-none mb-1 letter-spacing-0_2 fit-content"
                                      href="https://renty.ae/pages/support#partners_rc"
                                  >
                                      <GoComment className="mr-2" />
                                      Send Message
                                  </a>
                              </div>
                          </div>
                      </div>

                      {/* Address */}
                      <div className="pt-2 pt-lg-0">
                          <span className="location-in-dubai fw-bold text-uppercase">
                              Address
                          </span>
                          <div className="d-flex flex-column">
                              <a
                                  target="_blank"
                                  className="text-decoration-none footer-map-link"
                                  href="https://goo.gl/maps/i43UXGFzwrRvjK5G7"
                              >
                                  <span className="footer-map-span letter-spacing-0_2">
                                      Warehouse 4, 5th Street, Al Quoz, Al Quoz
                                      3, Dubai
                                  </span>
                                  <div className="mt-3">
                                      <img
                                          src="https://renty.ae/assets/images/maps/footer_map.png"
                                          loading="lazy"
                                          alt="Find us on Google Maps in Al Quoz, Dubai."
                                          title="Find us on Google Maps in Al Quoz, Dubai."
                                      />
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>

                  {/* ---End of the footer */}
                  <div className="d-flex align-items-center justify-content-between py-3 flex-column flex-lg-row">
                      <div className="d-flex flex-wrap justify-content-center justify-content-lg-start pb-3 pb-lg-0">
                          <img
                              width="43"
                              height="29"
                              alt="Payment logo visa"
                              title="Payment logo visa"
                              className="me-1"
                              src="https://renty.ae/assets-nd/images/payment-logo-visa--color.svg"
                              loading="lazy"
                          />
                          <img
                              width="43"
                              height="29"
                              alt="Payment logo mastercard"
                              title="Payment logo mastercard"
                              className="me-1"
                              src="https://renty.ae/assets-nd/images/payment-logo-master--color.svg"
                              loading="lazy"
                          />
                          <img
                              width="43"
                              height="29"
                              alt="Payment verified by visa logo"
                              title="Payment verified by visa logo"
                              className="me-1"
                              src="https://renty.ae/assets-nd/images/payment-verified-by-visa--color.svg"
                              loading="lazy"
                          />
                          <img
                              width="43"
                              height="29"
                              alt="Payment master securecode logo"
                              title="Payment master securecode logo"
                              className="me-1"
                              src="https://renty.ae/assets-nd/images/payment-master-securecode--color.svg"
                              loading="lazy"
                          />

                          <img
                              width="43"
                              height="29"
                              alt="Rent a car with cryptocurrency (USDT, TRC20)"
                              className="me-1"
                              title="Rent a car with cryptocurrency (USDT, TRC20)"
                              src="https://renty.ae/assets-nd/images/payment-tether.svg"
                              loading="lazy"
                          />
                          <img
                              width="43"
                              height="29"
                              alt="Rent a car with cryptocurrency (USDT, TRC20)"
                              className="me-1"
                              title="Rent a car with cryptocurrency (USDT, TRC20)"
                              src="https://renty.ae/assets-nd/images/payment-bitcoin.svg"
                              loading="lazy"
                          />
                      </div>
                      <span className="rights letter-spacing-0_2 ">
                          © 2024 Ultra Web Design LLC. All rights reserved.
                      </span>
                  </div>
              </div>
          </footer>
      </>
  );
}
