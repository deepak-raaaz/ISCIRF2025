

const Sponsor = () => {
    return <section id="sponsors" className="py-20 max-sm:py-10 bg-white">
        <div className="max-container mx-auto px-6">
            <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sponsors</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="grid items-center">

                {/* <!-- Content Column --> */}
                <div className="">
                    <p className="text-gray-700 leading-relaxed w-4/5 mx-auto text-center max-sm:w-full">
                    Sponsored by : <span className="font-bold">Tamluk Ghatal Central Co-Operative Bank Ltd.</span>
                    </p>


                </div>
                <img src="sponsor.png" alt="Sponsor 1"  className="w-1/2 mx-auto my-10 max-sm:w-full" />
            </div>


        </div>
    </section>
};

export default Sponsor;


