import {
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
} from "./locationsLinks";

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-top">
        <div className="container px-4 px-lg-0">
          {/* Some links */}
          <div className="py-4 border-bottom d-flex flex-lg-row flex-column">
            <div className="footer-pages-block py-lg-2 d-flex flex-grow-1 align-items-center mt-4 mt-lg-0">
              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                href="/"
                title="Learn more about one of the largest car rental marketplace in the UAE"
              >
                About us
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Support"
                href="/"
              >
                Support
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Terms &amp; conditions of using Renty Car Rental &amp; Leasing Portal"
                href="/"
              >
                Terms &amp; conditions
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Privacy Policy"
                href="/"
              >
                Privacy Policy
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Renty Sitemap"
                href="/"
              >
                Sitemap
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Car rental blog"
                href="/"
              >
                Blog
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                title="Car rental wiki"
                href="/"
              >
                Wiki
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                href="/"
              >
                Car rental app
              </a>

              <a
                className="text-decoration-none mb-2 letter-spacing-0_2"
                href="/"
              >
                Contact us
              </a>
            </div>

            <div className="footer-social-block py-lg-2 mt-4 mt-lg-0 d-flex">
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

          {/* Location in dubai */}
          <div className="footer-locations-container justify-content-between py-4 py-lg-5 d-flex flex-column flex-lg-row border-bottom with-areas">
            <div className="pb-4">
              <span className="location-in-dubai fw-bold text-uppercase">
                Location in dubai
              </span>

              <div className="footer-locations mt-4">
                <div className="locations d-none flex-column d-lg-flex">
                  {firstColumn.map((link, index) => (
                    <a
                      key={index}
                      className="text-decoration-none mb-1"
                      href={link.href}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                <div className="locations d-none flex-column d-lg-flex">
                  {secondColumn.map((link, index) => (
                    <a
                      key={index}
                      className="text-decoration-none mb-1"
                      href={link.href}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                <div className="locations d-none flex-column d-lg-flex">
                  {thirdColumn.map((link, index) => (
                    <a
                      key={index}
                      className="text-decoration-none mb-1"
                      href={link.href}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                <div className="locations d-none flex-column d-lg-flex">
                  {fourthColumn.map((link, index) => (
                    <a
                      key={index}
                      className="text-decoration-none mb-1"
                      href={link.href}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex flex-row flex-lg-column pb-4">
              <div className="pt-lg-0 flex-grow-1 flex-lg-grow-0 pt-4">
                <span className="location-in-dubai fw-bold text-uppercase">
                  INQUIRIES & SUPPORT
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
