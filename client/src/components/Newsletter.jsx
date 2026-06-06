export default function NewsLetter() {
    return (
        <section className="flex flex-col items-center text-white md:mt-20 md:m-0 m-5 " data-aos="fade-up">
            <div className="flex flex-col items-center">
                <h2 className="text-center text-6xl font-playfair max-w-2xl text-emerald-900">Subscribe our <span className=" text-white bg-gradient-to-t from-emerald-700 to-white p-1 bg-left inline-block bg-no-repeat">newsletter</span></h2>
                <p className="text-center text-slate-400 max-w-lg mt-3">Get handpicked stays and special offers straight to your inbox.</p>
            </div>
            <div className="flex items-center justify-center mt-10 border border-slate-700 focus-within:outline focus-within:outline-emerald-900 text-sm rounded-full h-14 max-w-xl w-full">
                <input className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400" placeholder="Enter your email address" type="text" />
                <button className="bg-emerald-900 text-white rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-emerald-700 active:scale-95 transition">Subscribe</button>
            </div>
        </section>
    );
};