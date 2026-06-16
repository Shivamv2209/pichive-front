import CreateEventBox from "../components/CreateEventBox";
import NavbarPages from "../components/NavbarPages";

function CreateEventPage() {
  return (
    <>
      <NavbarPages />

      <div className="max-w-3xl mx-auto px-5 mt-24 md:mt-32">

        <div className="text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Create an Event
          </h1>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-base md:text-xl font-medium text-[#868686] leading-relaxed">
              Set up your event and get a unique code to share with your guests.
            </p>
          </div>

          <CreateEventBox />

        </div>

      </div>
    </>
  );
}

export default CreateEventPage;