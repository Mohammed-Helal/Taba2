import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { CiUser, CiLock } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "@/Store/Slices/authSlice";

function Signup_Sec() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [checked, setChecked] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    phone_number:"",
    password: "",
    password_confirmation: "",
  });
  const [phoneRest, setPhoneRest] = useState(""); // 11 digits after country code
  const [isLoading, setIsLoading] = useState(false);

  // Toggle visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Touched state for validation
  const [touched, setTouched] = useState({
    name: false,
    phoneRest: false,
    password: false,
    password_confirmation: false,
  });

  // Password criteria state
  const [criteria, setCriteria] = useState({
    length: false,
    number: false,
    letter: false,
    special: false,
  });

  const validatePassword = (pwd) => {
    const length = pwd.length >= 8;
    const number = /\d/.test(pwd);
    const letter = /[a-zA-Z]/.test(pwd);
    const special = /[^A-Za-z0-9]/.test(pwd);
    setCriteria({ length, number, letter, special });
  };

  // Compute errors
  const errors = {
    name: FormData.name.trim() === "",
    phoneRest: phoneRest.length !== 11,
    password: Object.values(criteria).some((v) => !v),
    password_confirmation: FormData.password_confirmation !== FormData.password,
  };

  const formInvalid =
    errors.name || errors.phoneRest || errors.password || errors.password_confirmation || !checked;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, phoneRest: true, password: true, password_confirmation: true });
    if (formInvalid) return;

    setIsLoading(true);
    try {
      // combine country code and rest
      const payload = { ...FormData, phone_number: phoneRest };
      const resultAction = await dispatch(register(payload));
      if (register.fulfilled.match(resultAction)) {
        navigate("/Taba2/auth/login");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const inputBaseClass = "rounded-[15px] px-[66px] py-5 placeholder:text-right bg-[#D9D9D9] text-right w-full focus:outline-none";
  const prefixClass = "rounded-[15px] px-4 py-5 bg-[#E5E7EB] text-center text-right w-fit";

  return (
    <div
      style={{ zoom: '0.9' }}
      className="lg:w-[38%] w-full flex flex-col justify-between items-center md:items-end bg-white lg:px-[64px] lg:py-[px] px-10 py-9 rounded-[40px] h-full"
    >
      {/* Header */}
      <div>
        <h3 className="text-[48px]/[51px] font-[600]">انشاء حساب</h3>
        <p className="text-[14px]/[51px]">
          هل لديك حساب بالفعل؟{' '}
          <Link className="text-blue-500" to="/Taba2/auth/login">
            تسجيل الدخول
          </Link>
        </p>
      </div>

      <form
        className="flex flex-col justify-between h-full items-end gap-[18px] w-full mt-3"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <div className="relative w-full">
          <CiUser className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder=" ( الاسم الاول واسم العائله ) اسم المستخدم"
            className={`${inputBaseClass} ${touched.name && errors.name ? 'border-2 border-red-500' : ''}`}
            value={FormData.name}
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
            onBlur={() => handleBlur('name')}
          />
        </div>

        {/* Phone with country code */}
        <div className="flex w-full justify-center items-center gap-2">
          <div
          className= {prefixClass} >
            +20
          </div>
          <div className="relative flex-1">
            <MdOutlineLocalPhone className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              inputMode="numeric"
              maxLength={11}
              placeholder="رقم الهاتف"
              className={`${inputBaseClass} ${touched.phoneRest && errors.phoneRest ? 'border-2 border-red-500' : ''}`}
              value={phoneRest}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, '');
                setPhoneRest(digits.slice(0, 11));
              }}
              onBlur={() => handleBlur('phoneRest')}
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative w-full">
          <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="كلمة المرور"
            className={`${inputBaseClass} ${touched.password && errors.password ? 'border-2 border-red-500' : ''}`}
            value={FormData.password}
            onChange={(e) => {
              const pwd = e.target.value;
              setFormData({ ...FormData, password: pwd });
              validatePassword(pwd);
            }}
            onBlur={() => handleBlur('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-[32px] top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* Password Criteria */}
        <ul className="flex flex-row-reverse items-end gap-5 opacity-50 w-full text-right text-xs space-y-1">
          <li className="flex items-center gap-2">
            {criteria.length ? <FaCheck className="text-green-500" /> : <span className="w-fit" />} طول ≥ 8
          </li>
          <li className="flex items-center gap-2">
            {criteria.number ? <FaCheck className="text-green-500" /> : <span className="w-fit" />} يحتوي على ارقام
          </li>
          <li className="flex items-center gap-2">
            {criteria.letter ? <FaCheck className="text-green-500" /> : <span className="w-fit" />} يحتوي على حروف
          </li>
          <li className="flex items-center gap-2">
            {criteria.special ? <FaCheck className="text-green-500" /> : <span className="w-fit" />} يحتوي على رمز خاص
          </li>
        </ul>

        {/* Confirm Password */}
        <div className="relative w-full">
          <CiLock className="absolute right-[32px] top-1/2 transform -translate-y-1/2" />
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="تأكيد كلمة المرور"
            className={`${inputBaseClass} ${touched.password_confirmation && errors.password_confirmation ? 'border-2 border-red-500' : ''}`}
            value={FormData.password_confirmation}
            onChange={(e) => setFormData({ ...FormData, password_confirmation: e.target.value })}
            onBlur={() => handleBlur('password_confirmation')}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute left-[32px] top-1/2 transform -translate-y-1/2"
          >
            {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mt-2 w-full justify-end">
          <p>
            أوافق على{' '}
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

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-primary text-white text-[18px]/[32px] font-[400] px-[21%] py-[3%] rounded-[20px] w-full h-20 disabled:opacity-50"
          disabled={isLoading || formInvalid}
        >
          {isLoading ? (
            "جاري إنشاء الحساب..."
          ) : (
            <>
              <HiOutlineUserAdd />
              <p>انشاء حساب</p>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Signup_Sec;