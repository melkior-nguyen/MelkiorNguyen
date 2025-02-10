import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiAuthelia } from "react-icons/si";
import OTPInput from "react-otp-input";
import { useMediaQuery } from "react-responsive";
import "./style.css";
interface AnimatedDayTimeProps {
  delay: number;
}
const AnimatedOtp = ({ delay }: AnimatedDayTimeProps) => {
  const [otpValue, setOtpValue] = useState("000000");
  const [visibileInput, setVisibileInput] = useState(0);
  const isTablet = useMediaQuery({ maxWidth: "1200px" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOtpValue("123456");
    }, 2000);
    const interval = setInterval(() => {
      setVisibileInput((prev: number) => {
        if (prev < 6) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 50);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <motion.div
      className="h-full flex flex-col justify-between gap-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <span className="text-xl text-appGrayFocus font-semibold">
          Enter OTP Code
        </span>
        <OTPInput
          value={otpValue}
          onChange={setOtpValue}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
          numInputs={6}
          renderInput={(props, index) => (
            <motion.input
              {...props}
              className="otp_input"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: index < visibileInput ? 1 : 0 }}
              transition={{ duration: 0.2, delay: 2 }}
            />
          )}
          inputType="number"
        />
        {!isTablet && (
          <div className="w-full text-center flex justify-center items-center gap-6">
            <motion.button
              className="p-3 rounded"
              style={{
                boxShadow: "0 0 1px 0 #ffffff",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #eee,  #fff )",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Resend
              </span>
            </motion.button>
            <motion.button
              className="p-3 rounded"
              style={{
                boxShadow: "-1px -1px 6px 0 #000, 1px 1px 6px 0 #333",
                background: "linear-gradient(135deg,#333, #000)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #eee,  #fff )",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Verify 2FA
              </span>
            </motion.button>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <SiAuthelia size={16} />
        <span className="text-sm">&#x2022; Authorization</span>
      </div>
    </motion.div>
  );
};

export default AnimatedOtp;
