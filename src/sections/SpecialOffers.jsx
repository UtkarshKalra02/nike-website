import {offer} from "../assets/images"
import Button from "../Components/Button"
import {arrowRight} from "../assets/icons"

const SpecialOffers = () => {
  return (
   <section className="flex justify-wrap items-center
   max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1"></div>
    <img src={offer} width={773} height={687}
    className="object-contain w-full"/>
    <div>
    <h2 className="font-palanquin text-4xl capitalize font-bold
        lg:max-w-lg">
          <span className="text-coral-red"> Special</span>
          <span className="text-coral-red"> Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, 
        our meticulously crafted footwear is designed to 
        elevate your experience, providing you with unmatched quality, 
        innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence 
          ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now"
            iconURL={arrowRight} />
          <Button label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray" />
        </div>
        </div>
   </section>
  )
}

export default SpecialOffers