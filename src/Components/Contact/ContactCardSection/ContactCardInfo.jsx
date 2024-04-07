import s from "./ContactCardInfo.module.scss";
import ContactInfo from "./ContactInfo"

const ContactInfoCard = () => {
  return (
    <div className={s.contactInfo}>
      <ContactInfo iconName="phone" title="Call To Us">
        <p>We are available 24/7, 7 days a week.</p>
        <p>
          Phone: <a href="tel:+91 8220816711">8220816711</a>
        </p>
      </ContactInfo>

      <div className={s.horizontalLine} />

      <ContactInfo iconName="email2" title="Write To Us">
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>
          Emails:{" "}
          <a href="krishnanp132@gmail.com">krishnanp132@gmail.com</a>
        </p>
        <p>
          Emails:{" "}
          <a href="krishnanp132@gmail.com">krishnanp132@gmail.com</a>
        </p>
      </ContactInfo>
    </div>
  );
};
export default ContactInfoCard;
