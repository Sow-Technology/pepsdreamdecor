"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "PRABHAKAR CH",
    time: "5 days ago on Google",
    rating: 5,
    comment: "Awesome time for my kid",
  },
  {
    name: "Kusuma Ernest",
    time: "7 days ago on Google",
    rating: 5,
    comment:
      "Lovely place for the kids who love legos. They have a lot of legos and themes",
  },
  {
    name: "Sony Sunny George",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "Great place! More than 2 mill plus pieces! You can make any thing and will be...",
  },
  {
    name: "archana rajput",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "The place is very interesting and the staffs are helpful. Parents can sit and relax...",
  },
  {
    name: "Aishwarya John",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "Great place for kids to enjoy, make time and go as if they want to build...",
  },
  {
    name: "MELNA MATHEW",
    time: "17 days ago on Google",
    rating: 5,
    comment:
      "My kids enjoyed spending time here...it’s a new concept..All the very best",
  },
  {
    name: "Srishti Kalra",
    time: "18 days ago on Google",
    rating: 5,
    comment:
      "It's a very good and thoughtful place. My child had a wonderful time.",
  },
  {
    name: "Sneha Jain",
    time: "18 days ago on Google",
    rating: 5,
    comment:
      "It was a great fun experience for my 8yr old and even for us as adults...",
  },
  {
    rating: 5,
    name: "Sajid Malik",
    comment:
      "I have purchased the 3 mattresses from here and this is the one of the best experience of purchasing the mattresses from here, Mr. Umesh at the PEPS experience center is very polite and well knowledgeable, He explained and helped us to choose the right mattresses for us and also they delivered the mattresses before time with complimentary pillows & comforter ??, Thank you once again Mr. Umesh…????",
    time: "07/20/2024",
  },
  {
    rating: 5,
    name: "Hari Dinesh",
    comment:
      "Mr.Umesh has an in-depth knowledge & very polite in explaining all the details across variety of mattresses & got us a good bargain.",
    time: "07/17/2024",
  },

  {
    rating: 5,
    name: "pradeep murthy",
    comment:
      "Had a wonderful experience in buying new mattress for our new home. Apt suggestions were made while choosing the mattresses from diff models available based on our needs. I must say after using it for more than a month now that we have made the right choice. Having a very peaceful sleep since then with no back or neck pain when we get up the next day. Between we bought organica.",
    time: "06/26/2024",
  },
  {
    rating: 5,
    name: "Andrew Panicker",
    comment:
      "Amazing experience. Loved the quality and comfort guaranteed. Mr Umesh and Mr Vignesh helped us out a lot. Comfort within every mattress on point ??",
    time: "06/20/2024",
  },
  {
    rating: 5,
    name: "prab goog",
    comment:
      "Umesh, thank you for providing additional details on the fabric used in bedsheets. Your insights have shed light on the importance of factors such as material, fiber quality, fit, thread count, weave, and label when assessing the quality of bed sheets. This comprehensive information will undoubtedly help individuals make informed decisions when selecting the best fabric for their bedding needs.\nI am pleased to provide feedback on the Peps bedsheet quality. Peps bedsheets are known for their exceptional quality and durability. The fabric used is soft, comfortable, and long-lasting, ensuring a luxurious feel and a good night's sleep. The stitching is well done, contributing to the overall durability of the product. Additionally, the color retention of Peps bedsheets is commendable, as they maintain their vibrancy even after multiple washes. Overall, Peps bedsheets are a great choice for those looking for high-quality bedding that combines comfort, durability, and style.",
    time: "05/13/2024",
  },
  {
    rating: 5,
    name: "Akshay Upadhyaya",
    comment:
      "Bought a Peps Organica Mattress. Good experience overall. Good pricing offered and received the delivery next day.",
    time: "05/11/2024",
  },
  {
    rating: 5,
    name: "Shasi Kumar",
    comment:
      "It's comfortable compared to wakefit. We have to use for some months and then comment.",
    time: "04/03/2024",
  },
  {
    rating: 5,
    name: "anju ann",
    comment:
      "We had the best experience at this Peps Experience Center. Very friendly staff. Quite knowledgeable, and helps you choose the best option for you. Most importantly they’re extremely patient and doesn’t push you buy what isn’t needed. From placing the order to timely delivery, everything was perfect! A big thanks, specially to Umesh.",
    time: "03/30/2024",
  },
  {
    rating: 5,
    name: "shreoshi karmakar",
    comment:
      "Have purchased a mattress from this store. We needed the mattress a bit urgently and Mr. Umesh obliged to our request and made sure we receive the product next day itself. The product was explained and displayed to us with genuine approach. Although I was looking for a different mattress which was costing more but was given proper counsel by the owner, Mr. Umesh and he suggested us for the appropriate mattress based on our need. About Peps mattress, following thorough research we went for the peps mattress and after using it for over 2 weeks we are indeed very satisfied. Although you can get peps mattress from many stores panned across the city but the service of this store stands out. End to end the process was seamless and hassle-free for me. Thanks!",
    time: "03/20/2024",
  },
  {
    rating: 5,
    name: "Yogesh Nachnani",
    comment:
      "Loved the store. They have all the mattresses to try out and were very informative as well. This was followed up by prompt delivery on the agreed upon date.",
    time: "02/12/2024",
  },

  {
    rating: 5,
    name: "shashi kumar",
    comment:
      "I brought the Peps Mattress Experience Center on Old Madras Road last weekend. Honestly, I wasn't expecting much, but the salesmen there were a pleasant surprise.",
    time: "02/12/2024",
  },

  {
    rating: 5,
    name: "Vanan J",
    comment:
      "It is truly an experience centre. The way we were guided to select our mattress by understanding all the requirements even the smallest of one was incredible. Thanks to Mr Umesh and Ms Ashwini to have accorded the best of experience. They are definitely not behind to sell high cost mattress and no unnecessary spams or follow ups. 5 star experience.",
    time: "01/19/2024",
  },
  {
    rating: 5,
    name: "Raghavendra MS",
    comment:
      "We had very good buying experience at Peps experience store, old madras road branch. Ashwini helped us for checking different varieties of mattresses and decide the best one. We really recommend OMR branch for peaceful and easy buying.",
    time: "11/28/2023",
  },

  {
    rating: 5,
    name: "Harikrishna R",
    comment:
      "PEPS is the go-to brand for good quality, reasonably priced, spring mattresses. This showroom has a lot of options to try out. The sales folks are well informed and not at all pushy. Mattresses are made to order and delivered within a few days. It was a completely hassle-free experience. Highly recommend.",
    time: "11/18/2023",
  },

  {
    rating: 5,
    name: "Krish Prajapati",
    comment:
      '"The mattresses at PEPS are of top-notch quality. Tried and tested a few and finally settled on one that felt just right. The staff was patient and guided me through the selection process."',
    time: "10/11/2023",
  },
  {
    rating: 5,
    name: "Neelam Lal",
    comment:
      '"Found the ideal mattress at PEPS Mattress Experience Centre. The staff\'s guidance and comfort options were outstanding!"',
    time: "10/03/2023",
  },

  {
    rating: 5,
    name: "naveen sharma",
    comment:
      "I recently visited the Peps Mattress Experience Center in Old Madras Rd to purchase a new mattress. I was impressed with the wide selection of mattresses they had to offer, as well as the helpful and knowledgeable staff. I was able to try out a variety of mattresses before making my decision. The staff was patient and helpful, and they took the time to answer all of my questions. Definitely, a five-star experience.",
    time: "09/14/2023",
  },
  {
    rating: 5,
    name: "chandra mital. MitalCmmital",
    comment:
      "À very pleasant and comfortable walk through all the mattress. We were able to lie down and sleep on the mattress to have a feel of them. The sales person was extremely polite and explained the pros and cons of each mattress.",
    time: "09/10/2023",
  },
];

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const ReviewCard = ({ review }) => (
  <div className="border border-[#FFA45B] rounded-lg p-4 shadow-md bg-white relative overflow-hidden mx-2 h-[270px] flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold text-lg text-[#FFA45B]">{review.name}</div>
        <div className="flex items-center space-x-2">
          <FcGoogle />
          <span className="text-sm text-gray-500">
            {review.time.replace("on Google", "")}
          </span>
        </div>
      </div>
      <div className="flex items-center mb-2">
        {Array.from({ length: review.rating }, (_, i) => (
          <span key={i} className="text-[#FFDA77]">
            ★
          </span>
        ))}
      </div>
    </div>
    <p className="text-gray-700 flex-grow overflow-hidden">
      {truncateText(review.comment, 30)}
    </p>
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFA45B] to-[#FFDA77] opacity-5 pointer-events-none" />
  </div>
);

const ReviewsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    sliderRef.current.slickPause();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    sliderRef.current.slickPlay();
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#FFA45B] text-white p-2 rounded-full shadow-md"
        onClick={onClick}
      >
        <ChevronLeft size={24} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#FFA45B] text-white p-2 rounded-full shadow-md"
        onClick={onClick}
      >
        <ChevronRight size={24} />
      </button>
    );
  };

  return (
    <div className="bg-[#FBF6F0] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFA45B] to-[#FFDA77] opacity-10" />
      {/* Top fading gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FBF6F0] to-transparent z-10" />
      {/* Bottom fading gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF6F0] to-transparent z-10" />
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.h2
          className="text-3xl font-bold text-center text-[#FFA45B] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="py-20"
        >
          <Slider
            {...settings}
            ref={sliderRef}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {reviews.map((review, index) => (
              <div key={index} className="">
                <ReviewCard review={review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
