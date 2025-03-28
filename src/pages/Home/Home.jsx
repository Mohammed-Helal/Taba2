import Top_Nav from '../../components/Top_Nav'
import Clouds from '/clouds.png'
import Clouds2 from '/clouds2.png'
import Clouds3 from '/clouds3.png'
import Delivary from '/delivary with logo.png'
import Food from '/Food.jpeg'
import Logo from '/Logo.png'
import Waves from '/Waves.png'
import '@/pages/Home/Home.css'

const Home = () => {
return (
    <>
        <div className="grid">
            <div className='flex flex-col justify-items-center relative'>
                <div className='md:w-[600px] pr-32 absolute z-50 right-0 pt-20'>
                    <Top_Nav />
                </div>

                <div className="logo-and-info absolute z-50 top-24">
                    <div className="container pr-7">
                    <div className="logo"><img src={Logo} alt="Logo" /></div>
                    <div className="main-picture"><img src={Food} alt="Food" /></div>

                    <div className="search-container">
                        <input type="text" placeholder="اكتب وصفه" />
                        <button type="submit">ابحث</button>
                    </div>

                    <div className="info">
                        <p>
                        !اكتشف أشهى الوصفات واحصل على مكوناتها بسهولة
                        <br />
                        اكثر من 10,000 وصفه، ڤيديوات تفصيليه للوصفات
                        <br />
                        .توصيل المكونات او الوصفات جاهزه
                        </p>
                    </div>
                    <a href="#" className="button">تصفح الوصفات</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="left-side">
            <div className="container">
                <div className="waves"><img src= {Waves} alt="waves" /></div>
                <div className="food"><img src= {Food} alt="Food" /></div>
                <div className="clouds"><img src= {Clouds} alt="Smoke" /></div>
                <div className="delivary"><img src= {Delivary} alt="Delivary" /></div>
            </div>
        </div>
    </>        
)}

export default Home