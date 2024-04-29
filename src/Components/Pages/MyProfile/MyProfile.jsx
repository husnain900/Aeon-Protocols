import { useState } from 'react';
import './MyProfile.css';
import Nav from "../../Commons/MobileNav/nav";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const [activeTab, setActiveTab] = useState(0); // State to track which tab is active

    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "100", text: "$Dream Earned" },
        { iconSrc: "Assets/Images/All Icons/Group 69.svg", value: "0", text: "Models Contributed To" },
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 70.svg", value: "3", text: "Nodes Owned" },
        { iconSrc: "Assets/Images/All Icons/Group 72.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 82.svg", value: "18h 37m", text: "More Ratings Unlock in" },
    ];

    // Handle tab change when a button is clicked
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className='mb-28'>
                <header className="header-mob lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] h-14 py-4  px-6">
                    <h5>@TonyStark</h5>
                    <div className="float-right mt-[-23px] lg:mt-[-34px] flex items-center gap-4">
                        <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
                        <Link className='sm-hidden' to="/MyProfile">
                            <img className='lg:h-8 2xl:h-10' src="Assets/Images/All Icons/Ellipse 2.svg" alt="" />
                        </Link>
                        <div className='lg:hidden'>
                            <Link to="/">
                                <img src="Assets/Images/All Icons/Group 177.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="container mx-auto p-6 lg:px-16 2xl:px-[100px]">
                    <div className="MyProfile-content">
                        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box">
                            {boxes.map((box, index) => (
                                <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E] rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full">
                                    <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                        <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                            <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                        </div>
                                        <div>
                                            <p className="sm-hidden md:block">{box.text}</p>
                                            <h4>{box.value}</h4>
                                        </div>
                                    </div>
                                    <p className="sm:block md:hidden">{box.text}</p>
                                </div>
                            ))}
                        </div>
                        <h4 className="text-18-sm mt-10 mb-6 md:hidden ">My Generations</h4>
                        <div className='tab-btn flex gap-2 mb-6 items-center lg:mt-14 2xl:mt[72px] lg:mb-14'>
                            <h4 className='tab-btn-font sm-hidden text-white'>My Generations:</h4>
                            {['Today', 'This Week', 'This Month'].map((name, index) => (
                                <Button
                                    key={index}
                                    className={`py-[6px] lg:py-2 px-4 lg:px[18px] rounded-[20px] ${activeTab === index ? 'bg-white text-black ' : 'bg-[#2C2E2E] text-white lg:bg-[rgba(255, 255, 255, 0.3)] tab-btn-font'
                                        }`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {name}
                                </Button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === 0 && <div>
                                <img className='md:hidden' src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                                <img className='sm-hidden lg:block' src="Assets/Images/MyProfile/Frame 5.png" alt="" />
                            </div>}
                            {activeTab === 1 && <div>
                                <img className='md:hidden' src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                                <img className='sm-hidden lg:block' src="Assets/Images/MyProfile/Frame 5.png" alt="" />
                            </div>
                            }
                            {activeTab === 2 && <div>
                                <img className='md:hidden' src="Assets/Images/MyProfile/Frame 6.png" alt="" />
                                <img className='sm-hidden lg:block' src="Assets/Images/MyProfile/Frame 5.png" alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default MyProfile;
