import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { CiUser, CiLock } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "@/Store/Slices/authSlice";

function Signup_Sec() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // States
    const [checked, setChecked] = useState(false);
    const [FormData, setFormData] = useState({
        name:"",
        phone_number:"",
        password:"",
        password_confirmation:"",
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checked) {
        alert("يجب الموافقة على الشروط والأحكام أولاً.");
        return;
    }

    setIsLoading(true);
    try {
        const resultAction = await dispatch(
            register(FormData)
        );

        if (register.fulfilled.match(resultAction)) {
            navigate("/Taba2/login");
        }
    } catch (err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
    };

    return (
        <div className="lg:w-[38%] w-full flex flex-col justify-center items-center md:items-end bg-white lg:px-[64px] lg:py-[104px] px-10 py-30 rounded-[40px] h-full">
            <div>
                <h3 className="text-[48px]/[51px] font-[600]">انشاء حساب</h3>
                <p className="text-[14px]/[51px]">
                    هل لديك حساب بالفعل؟{" "}
                    <Link className="text-blue-500" to="/Taba2/login">
                    تسجيل الدخول
                    </Link>
                </p>
            </div>

            <form
            className="flex flex-col justify-center items-end gap-[18px] w-full"
            onSubmit={handleSubmit}
            >
            <div className="relative w-full">
                <CiUser className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                placeholder="اسم المستخدم"
                className="rounded-[20px] px-[66px] py-3 placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.name}
                onChange={(e) => setFormData({...FormData, name: e.target.value})}
                />
            </div>

            <div className="relative w-full">
                <MdOutlineLocalPhone className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                placeholder="رقم الهاتف"
                className="rounded-[20px] px-[66px] py-3 placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.phone_number}
                onChange={(e) => setFormData({...FormData, phone_number: e.target.value})}
                />
            </div>

            <div className="relative w-full">
                <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="password"
                placeholder="كلمة المرور"
                className="rounded-[20px] px-[66px] py-3 placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.password}
                onChange={(e) => setFormData({...FormData, password: e.target.value})}
                />
            </div>

            <div className="relative w-full">
                <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                className="rounded-[20px] px-[66px] py-3 placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none"
                value={FormData.password_confirmation}
                onChange={(e) => setFormData({...FormData, password_confirmation: e.target.value})}
                />
            </div>

            <div className="flex items-center gap-2 mt-2 w-full justify-end">
                <p>
                أوافق على{" "}
                <Link className="text-blue-500" to="#">
                    الشروط والأحكام
                </Link>
                </p>
                <button
                type="button"
                onClick={() => setChecked(!checked)}
                className={`size-[18px] rounded-[5px] border-2 flex items-center justify-center transition-all duration-300 ${
                    checked ? "bg-primary border-primary" : "bg-white border-gray-400"
                }`}
                >
                    {checked && <FaCheck className="text-white text-sm" />}
                </button>
            </div>

            <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-white text-[18px]/[32px] font-[400] px-[21%] py-[3%] rounded-[20px] w-full"
                disabled={isLoading}
            >
                {isLoading ? "جاري إنشاء الحساب..." : <>
                <HiOutlineUserAdd />
                <p>انشاء حساب</p>
                </>}
            </button>
        </form>
    </div>
    );
}

export default Signup_Sec;
