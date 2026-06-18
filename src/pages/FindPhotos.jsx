import NavbarPages from "../components/NavbarPages";
import FindPhotosBox from "../components/FindPhotosBox";

function FindPhotos(){
    return(
        <>
        <NavbarPages />
        <div className="max-w-3xl mx-auto px-5 mt-50 md:mt-60">

        <div className="text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Glide to Your Moments
          </h1>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-base md:text-xl font-medium text-[#868686] leading-relaxed">
              Enter your event code to go to your memories
            </p>
          </div>

          <FindPhotosBox/>

        </div>

      </div>
        </>
    )
}

export default FindPhotos;