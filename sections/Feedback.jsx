'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row gap-6  flex-col  `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Samantha
          </h4>
          <p className=" mt-8 font-normal sm:Text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white  ">
            Founder |Metaversus
          </p>
        </div>
        <p className=" mt-[24px] font-normal sm:Text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, alias eos. Vero mollitia iste odio cum expedita doloremque blanditiis sapiente perferendis adipisci, id autem consequuntur. Ipsa iusto quae corporis eaque, commodi asperiores omnis, fugit, incidunt eveniet autem ipsum similique. Excepturi?
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center "
      >
        <img src="/planet-09.png" alt="planet9" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] " />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[30%] "
        >
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain  " />

        </motion.div>

      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
