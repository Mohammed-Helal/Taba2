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
        phone_number: "",
        password: "",
    });
    const [touched, setTouched] = useState({ phone_number: false, password: false });
    const [isLoading, setIsLoading] = useState(false);

    // Validation
    const errorPhone = FormData.phone_number.length !== 11;
    const errorPassword = FormData.password.trim() === "";
    const formInvalid = errorPhone || errorPassword;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ phone_number: true, password: true });
        if (formInvalid) return;

        setIsLoading(true);
        try {
            const resultAction = await dispatch(
                login(FormData)
            );

            if (login.fulfilled.match(resultAction)) {
                navigate("/Taba2/", {state: {message: "تم تسجيل الدخول بنجاح"}});
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePhoneChange = (e) => {
        const digits = e.target.value.replace(/\D/g, '');
        setFormData({ ...FormData, phone_number: digits.slice(0, 11) });
    };

    const handlePasswordChange = (e) => {
        setFormData({ ...FormData, password: e.target.value });
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
            <div className="relative w-full mb-6">
                <MdOutlineLocalPhone className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                inputMode="numeric"
                maxLength={11}
                placeholder="رقم الهاتف"
                className={`rounded-[15px] px-[66px] py-[24px] placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none h-20 ${touched.phone_number && errorPhone ? 'border-2 border-red-500' : ''}`}
                value={FormData.phone_number}
                onChange={handlePhoneChange}
                onBlur={() => setTouched({ ...touched, phone_number: true })}
                />
                {touched.phone_number && errorPhone && (
                <p className="text-red-500 text-xs absolute left-0 bottom-[-18px]">يجب أن يكون الرقم 11 رقماً</p>
                )}
            </div>

            <div className="relative w-full mb-6">
                <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
                <input
                type="password"
                placeholder="كلمة المرور"
                className={`rounded-[15px] px-[66px] py-[24px] placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none h-20 ${touched.password && errorPassword ? 'border-2 border-red-500' : ''}`}
                value={FormData.password}
                onChange={handlePasswordChange}
                onBlur={() => setTouched({ ...touched, password: true })}
                />
                {touched.password && errorPassword && (
                  <p className="text-red-500 text-xs absolute left-0 bottom-[-18px]">يجب كتابة كلمة المرور</p>
                )}
            </div>

            <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-white text-[18px]/[32px] font-[400] px-[21%] py-[3%] rounded-[20px] w-full h-20 disabled:opacity-50"
                disabled={isLoading || formInvalid}
            >
                {isLoading ? "جاري تسجيل الدخول..." : <>
                <PiSignInBold />
                <p>تسجيل الدخول</p>
                </>}
            </button>
        </form>
    </div>
    );
}

export default Signup_Sec;