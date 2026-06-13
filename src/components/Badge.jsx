export default function Badge() {
  return (
    <div className="mt-10 mb-20 p-10 bg-black max-w-5xl mx-auto">
      <div className="bg-[#121111] rounded-[32px] h-[250px] text-center p-10">
        <h1 className="text-white font-bold text-4xl mt-2 mb-5">Ready to transform your event experience?</h1>
       <div className="max-w-2xl mx-auto mb-8">
         <p className="text-xl text-[#868686]">
          Let PICHIVE turn thousands of photos into memories that matter.
        </p>
       </div>
       <div className="flex items-center justify-center gap-4">
        <button className="text-black bg-white rounded-2xl px-4 text-lg font-medium hover:bg-[#868686]">Create Your First Event</button>
        <button className="text-[#868686] hover:text-white text-lg">Find My Photos</button>
       </div>
      </div>
    </div>
  );
}
