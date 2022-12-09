import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better deal<br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Nullam tempus mattis erat. Proin elementum elit et fermentum pellentesque. Mauris luctus cursus purus vel ultrices. Sed bibendum, leo non faucibus dignissim, nunc neque suscipit risus, vitae gravida odio erat non arcu.
      </p>
    <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"  />

    </div>
  </section>
)

export default CardDeal