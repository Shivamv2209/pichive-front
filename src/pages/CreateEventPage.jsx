import CreateEventBox from "../components/CreateEventBox";
import NavbarPages from "../components/NavbarPages";

function CreateEventPage() {
  return (
    <>
      <NavbarPages />
      <div className="max-w-3xl mt-30 mx-auto">
        <div className="text-center pt-10">
          <h1 className="text-4xl font-bold text-white mb-5">
            Create an Event
          </h1>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-xl font-medium text-[#868686]">
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
