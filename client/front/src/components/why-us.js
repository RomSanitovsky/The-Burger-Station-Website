export default function WhyUs() {
  return (
    <div id="whyUs">
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Us</h2>
            <p>Why have ABS when you can have all the burgers</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <span>01</span>
                <h4>Mini Station - Free</h4>
                <p>
                  1 Free Refill Unlimited Wi-Fi Usage By Ordering Burger + Soft
                  Drink
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                <span>02</span>
                <h4>Medium Station - $27</h4>
                <p>
                  2 Free Refills Unlimited Wi-Fi Usage By Ordering Burger + Soft
                  Drink
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                <span>03</span>
                <h4> Mega Station - $30</h4>
                <p>
                  Unlimited Refills Unlimited Wi-Fi Usage By Ordering Burger +
                  Soft Drink
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}
