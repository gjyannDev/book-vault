import aboutUsImage from "../assets/images/aboutUsHeroImage.png";
import missionImage from "../assets/images/missionImage.png";
import visionImage from "../assets/images/visionImage.png";

export default function AboutPage() {
  return (
    <div className="text-[var(--primary-text)] mb-14 lg:mb-20 xl:mb-28">
      <h1 className="font-playfair-bold text-3xl py-6 md:text-4xl md:py-8 xl:text-5xl xl:py-12">
        ABOUT US
      </h1>
      <div className="flex flex-col gap-16 lg:gap-24">
        <div className="flex flex-col gap-4 lg:gap-6">
          <img
            src={aboutUsImage}
            className="mx-auto md:w-[732px] lg:w-[856px] xl:w-[1024px]"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-playfair-bold text-xl md:text-2xl md:max-w-xl lg:text-3xl lg:max-w-2xl xl:text-4xl xl:max-w-4xl xl:leading-[1.4]">
              Your trusted destination for discovering, buying, and falling in
              love with books.
            </h1>
            <p className="font-lora-regular text-sm leading-[1.5] md:text-md md:max-w-xl lg:max-w-2xl lg:leading-[1.7] xl:text-lg xl:max-w-3xl">
              At BookVault, we believe books are more than just pages — they are
              gateways to knowledge, imagination, and inspiration. Founded with
              a passion for reading and a mission to make books more accessible,
              BookVault brings together a curated collection of titles across
              genres and generations. Whether you're a student, a professional,
              or a curious reader, we're here to help you find your next great
              read.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12 xl:gap-24">
          <div className="flex flex-col gap-2 md:flex-row md:gap-6 xl:gap-12">
            <img src={visionImage} className="md:w-1/2 md:block" />
            <div className="flex flex-col md:w-1/2 md:gap-2">
              <h1 className="font-playfair-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Our Vision
              </h1>
              <p className="font-lora-regular text-sm lg:text-md lg:leading-[1.5] xl:text-lg">
                We envision a future where books are not a luxury but a
                lifestyle, empowering people to learn, grow, and connect through
                the power of stories and information.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row-reverse xl:gap-x-12 ">
            <img src={missionImage} className="md:w-1/2 md:block" />
            <div className="flex flex-col md:w-1/2 md:gap-2">
              <h1 className="font-playfair-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Our Mission
              </h1>
              <p className="font-lora-regular text-sm lg:text-md lg-leading-[1.5] xl:text-lg">
                We envision a future where books are not a luxury but a
                lifestyle, empowering people to learn, grow, and connect through
                the power of stories and information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
