import React, { useState } from "react";
import { PiSignInBold } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/Store/Slices/authSlice"; 

function Signup_Sec() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // States
    const [FormData, setFormData] = useState({
        phone_number:"",
        password:"",
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            const resultAction = await dispatch(
                login(FormData)
            );

            if (login.fulfilled.match(resultAction)) {
                navigate("/Taba2/");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="lg:w-[38%] w-full flex flex-col justify-center md:items-end items-center bg-white lg:px-[64px] py-[104px] px-10 py-30 rounded-[40px] h-full">

            <form
            className="flex flex-col md:items-end items-center justify-between h-full w-full"
            onSubmit={handleSubmit}
            >
            <div>
                <h3 className="text-[48px]/[51px] font-[600] whitespace-nowrap">تسجيل الدخول</h3>
                <p className="text-[14px]/[51px] md:text-end text-center mt-2">
                    ليس لديك حساب؟{" "}
                    <Link className="text-blue-500" to="/Taba2/auth/signup">
                        انشاء حساب
                    </Link>
                </p>
            </div>
            <div className="relative w-full">
                <MdOutlineLocalPhone className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                placeholder="رقم الهاتف"
                className="rounded-[20px] px-[66px] py-[24px] placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.phone_number}
                onChange={(e) => setFormData({...FormData, phone_number: e.target.value})}
                />
            </div>

            <div className="relative w-full">
                <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="password"
                placeholder="كلمة المرور"
                className="rounded-[20px] px-[66px] py-[24px] placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.password}
                onChange={(e) => setFormData({...FormData, password: e.target.value})}
                />
            </div>

            <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-white text-[18px]/[32px] font-[400] px-[21%] py-[3%] rounded-[20px] w-full"
                disabled={isLoading}
            >
                {isLoading ? "جاري إنشاء الحساب..." : <>
                <PiSignInBold />
                <p>تسجيل الدخول</p>
                </>}
            </button>
        </form>
    </div>
    );
}

export default Signup_Sec;