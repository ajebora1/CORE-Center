import {useNavigate} from "react-router-dom";

export default function Welcome() {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    return (
    <div>
        <div className="object-cover bg-[url('https://i.imgur.com/y6allgB.jpg')]" >
        <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img class="object-cover h-20 w-96" src="https://i.imgur.com/8AyKdz6.jpg" alt="welcome" />
        </section>
        <div className="block text-lg font-semibold text-gray-800 text-center">To change one ripple effect where we are dedicated to making a difference one person at a time!</div>
        <br/>
        <br/>
        <div className="block text-lg font-semibold text-gray-800 text-center"> To our Donors, We say </div>
        <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img class="object-cover h-20 w-96" src="https://i.imgur.com/VzOTiOI.jpg" alt="thanks" />
        </section>
        <div className="block text-lg font-semibold text-gray-800 text-center"> For partnering with us on this journey. You can never go wrong in giving for a good cause. </div>
        <br/>
        <br/>
        <div className="block text-lg font-semibold text-gray-800 text-center"> To our Payforwarders, We also say </div>
        <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img class="object-cover h-20 w-96" src="https://i.imgur.com/VzOTiOI.jpg" alt="thanks" />
        </section>
        <div className="block text-lg font-semibold text-gray-800 text-center"> For showing us that the world can be a better place if we stand by each other. </div>  
        <br/>
        <br/>
        <div className="block text-lg font-semibold text-gray-800 text-center"> To our Recipients you have come to the right place, change can be challenging and scary but with determination and dedication, you will get throught it. So we say</div>
        <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
        <img class="object-cover h-30 w-96" src="https://i.imgur.com/XyA4aAD.jpg" alt="doit" />
        {/* <img class="object-cover h-30 w-96" src="https://i.imgur.com/JZLL0Zw.jpg" alt="doit" /> */}
        </section>
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        onClick={navigateToProfile}>Go to Profile Page</button>
        </div>
    </div>
    )
}