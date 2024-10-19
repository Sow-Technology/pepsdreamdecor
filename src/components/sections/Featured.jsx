"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Leaf, Moon, Shield, Sun, Zap } from "lucide-react";

const FeatureIcon = ({ Icon, text }) => (
  <motion.div
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="w-5 h-5 text-[#FFA45B]" />
    <span className="text-sm text-gray-600">{text}</span>
  </motion.div>
);

const ProductFeature = ({ Icon, text }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
  >
    <Icon className="w-8 h-8 text-[#FFA45B]" />
    <span className="text-xs mt-1">{text}</span>
  </motion.div>
);

const ProductSection = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse,
  ml = true,
  crop = false,
}) => (
  <motion.div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="md:w-1/2 space-y-6">
      <h3 className="text-4xl font-bold text-[#FFA45B]">{title}</h3>
      <p className="text-gray-600 max-w-md">{description}</p>
      <motion.button
        className="flex items-center space-x-2 bg-[#FFA45B] text-white rounded-full px-6 py-2 hover:bg-[#FFDA77] hover:text-[#FFA45B] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Shop now</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
      <div className="flex space-x-8">
        {features.map((feature, index) => (
          <ProductFeature key={index} Icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </div>
    <motion.div className=" mt-8 md:mt-0  " whileHover={{ scale: 1.05 }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={1300}
        className={` w-auto  ${
          ml ? "lg:ml-60" : "lg:-ml-20"
        }  h-auto rounded-lg ${!crop && "max-w-[70%]"} `}
      />
    </motion.div>
  </motion.div>
);

export default function Featured() {
  return (
    <div className="max-w-7xl mx-auto pl-20 py-8 bg-[#ffffff] relative">
      <motion.div
        className="flex justify-center space-x-8 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <FeatureIcon Icon={Clock} text="Industry Best 10 year Warranty" />
        <FeatureIcon Icon={Zap} text="100 Night Risk-Free Trial" />
        <FeatureIcon
          Icon={Shield}
          text="Always Free Shipping in 5-7 Business Days"
        /> */}
      </motion.div>

      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#FFA45B]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        FEATURED PRODUCTS
      </motion.h2>

      <div className="space-y-24 z-10 relative">
        <ProductSection
          title="Mattress"
          description="Utilizing only the finest European foams and fibers, Dreamzy is able to provide a luxurious mattress at an affordable cost. Our mattress features cooling technology to help you sleep better than other foam mattresses in the market today, while helping to increase bloodflow with..."
          features={[
            { icon: Sun, text: "Thickness" },
            { icon: Moon, text: "Cooling" },
            { icon: Leaf, text: "Hypoallergenic" },
            { icon: Shield, text: "Durable" },
            { icon: Zap, text: "Dust mite resistant" },
          ]}
          imageSrc="/mattress.png"
          imageAlt="Mattress"
          crop={true}
        />

        <ProductSection
          title="Pillow"
          description="A pillow should not only provide comfort, it should also contour to your neck to provide maximum support. The Dreamzy 2.0 comes with 2 different pillow cases to provide a cool or warm feeling using our bio-ceramic fibers."
          features={[
            { icon: Sun, text: "Orthopedic" },
            { icon: Zap, text: "For allergies" },
            { icon: Leaf, text: "Natural" },
          ]}
          imageSrc="/pillow.png"
          imageAlt="Pillow"
          reverse={true}
          ml={false}
        />

        <ProductSection
          title="Comforter"
          description="Dreamzy knows everyone prefers a certain warm to cold ratio. Our comforter comes in 3 different TOG ratings. Choose cooling for those who tend to sleep hot, or choose warm for those who need a little extra heat while they sleep."
          features={[
            { icon: Sun, text: "Orthopedic" },
            { icon: Zap, text: "For allergies" },
            { icon: Leaf, text: "Natural" },
            { icon: Moon, text: "Cool" },
          ]}
          imageSrc="/comfort.png"
          imageAlt="Comforter"
        />
      </div>
    </div>
  );
}
