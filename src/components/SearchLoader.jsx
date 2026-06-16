function SearchLoading({ eventName }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-white">

      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-[#2a2a2a] border-t-white rounded-full animate-spin mb-8" />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
        AI is finding your photos...
      </h1>

      {/* Event */}
      <p className="text-[#868686] mt-4 text-center">
        Scanning event{" "}
        <span className="text-white">{eventName}</span>
      </p>

      {/* Description */}
      <p className="text-[#868686] mt-8 text-center max-w-md leading-relaxed text-sm md:text-base">
        Our AI is analyzing thousands of photos to find the ones featuring
        you. This usually takes just a few seconds.
      </p>

      {/* Status card */}
      <div className="bg-[#1e1e1e] rounded-3xl p-6 mt-10 w-full max-w-[450px]">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p>Verifying event code</p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p>Processing your selfie</p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
          <p>Scanning event photos</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#444]"></div>

          <p className="text-[#868686]">
            Preparing your gallery
          </p>
        </div>

      </div>

    </div>
  );
}

export default SearchLoading;