import { womenShopping } from "src/Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () => {
  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2>Our Story</h2>

        <p>
        Established in 2015, Shoppy is a thriving online shopping destination with a strong foothold in South Asia. With a dedicated branch in Coimbatore, India, Shoppy offers a curated selection of products from over 10,500 sellers and 300 brands, serving a customer base of 3 million across the region. Supported by tailored marketing, data, and service solutions, Shoppy continues to expand its offerings, boasting a diverse assortment of over 1 million products. From consumer electronics to fashion, Shoppy is committed to providing a seamless shopping experience for all its customers.
        </p>

        <p>
        
        </p>
      </section>

      <div className={s.imgHolder}>
        <img src={womenShopping} alt="two young women happy with shopping" />
      </div>
    </section>
  );
};
export default AboutHeroSection;
