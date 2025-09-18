import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

type Step = 'email' | 'otp' | 'reset';

export const ForgotPasswordForm = ({ onBack }: ForgotPasswordFormProps) => {
  const [step, setStep] = useState<Step>('email');
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    emailOrPhone: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Password validation rules
  const validatePassword = (pwd: string) => {
    const hasMinLength = pwd.length >= 12;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    
    return {
      isValid: hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial,
      hasMinLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecial
    };
  };

  const validateEmailOrPhone = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmailOrPhone(emailOrPhone)) {
      setErrors(prev => ({ ...prev, emailOrPhone: "Please enter a valid email or phone number" }));
      return;
    }
    
    // Simulate OTP sending
    console.log("Sending OTP to:", emailOrPhone);
    setStep('otp');
    setErrors(prev => ({ ...prev, emailOrPhone: "" }));
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setErrors(prev => ({ ...prev, otp: "Please enter a valid 6-digit OTP" }));
      return;
    }
    
    // Simulate OTP verification
    console.log("Verifying OTP:", otp);
    setStep('reset');
    setErrors(prev => ({ ...prev, otp: "" }));
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.isValid) {
      setErrors(prev => ({ ...prev, newPassword: "Password does not meet requirements" }));
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      return;
    }
    
    // Handle password reset logic here
    console.log("Resetting password");
    // Redirect to login or show success message
  };

  const passwordValidation = validatePassword(newPassword);

  const renderEmailStep = () => (
    <form onSubmit={handleSendOTP} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="emailOrPhone">Email or Mobile Number</Label>
        <Input
          id="emailOrPhone"
          type="text"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className={errors.emailOrPhone ? "border-red-500" : emailOrPhone && validateEmailOrPhone(emailOrPhone) ? "border-green-500" : ""}
          placeholder="Enter your email or mobile number"
        />
        {errors.emailOrPhone && <p className="text-sm text-red-500">{errors.emailOrPhone}</p>}
      </div>
      
      <Button type="submit" className="w-full">
        Send OTP
      </Button>
    </form>
  );

  const renderOTPStep = () => (
    <form onSubmit={handleVerifyOTP} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp">Enter OTP</Label>
        <Input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
          className={errors.otp ? "border-red-500" : otp.length === 6 ? "border-green-500" : ""}
          placeholder="Enter 6-digit OTP"
          maxLength={6}
        />
        {errors.otp && <p className="text-sm text-red-500">{errors.otp}</p>}
        <p className="text-sm text-muted-foreground">
          OTP sent to {emailOrPhone}
        </p>
      </div>
      
      <Button type="submit" className="w-full">
        Verify OTP
      </Button>
      
      <div className="text-center">
        <Button
          type="button"
          variant="link"
          className="text-sm"
          onClick={() => handleSendOTP(new Event('submit') as any)}
        >
          Resend OTP
        </Button>
      </div>
    </form>
  );

  const renderResetStep = () => (
    <form onSubmit={handleResetPassword} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <div className="relative">
          <Input
            id="newPassword"
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`${errors.newPassword ? "border-red-500" : newPassword && passwordValidation.isValid ? "border-green-500" : ""} pr-10`}
            placeholder="Enter new password"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        
        {newPassword && (
          <div className="text-xs space-y-1 mt-2 p-3 bg-muted/50 rounded-md">
            <p className="font-medium text-muted-foreground">Password must contain:</p>
            <div className="space-y-1">
              <p className={passwordValidation.hasMinLength ? "text-green-600" : "text-red-500"}>
                ✓ At least 12 characters
              </p>
              <p className={passwordValidation.hasUppercase ? "text-green-600" : "text-red-500"}>
                ✓ At least 1 uppercase letter
              </p>
              <p className={passwordValidation.hasLowercase ? "text-green-600" : "text-red-500"}>
                ✓ At least 1 lowercase letter
              </p>
              <p className={passwordValidation.hasNumber ? "text-green-600" : "text-red-500"}>
                ✓ At least 1 number
              </p>
              <p className={passwordValidation.hasSpecial ? "text-green-600" : "text-red-500"}>
                ✓ At least 1 special character
              </p>
            </div>
          </div>
        )}
        
        {errors.newPassword && <p className="text-sm text-red-500">{errors.newPassword}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${errors.confirmPassword ? "border-red-500" : confirmPassword && confirmPassword === newPassword && newPassword ? "border-green-500" : ""} pr-10`}
            placeholder="Confirm new password"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
      </div>
      
      <Button type="submit" className="w-full">
        Reset Password
      </Button>
    </form>
  );

  const getTitle = () => {
    switch (step) {
      case 'email': return 'Forgot Password';
      case 'otp': return 'Verify OTP';
      case 'reset': return 'Reset Password';
    }
  };

  const getDescription = () => {
    switch (step) {
      case 'email': return 'Enter your email or mobile number to receive an OTP';
      case 'otp': return 'Enter the OTP sent to your email or mobile number';
      case 'reset': return 'Create a new password for your account';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={step === 'email' ? onBack : () => setStep(step === 'otp' ? 'email' : 'otp')}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-serif">{getTitle()}</h2>
          <p className="text-muted-foreground mt-1">{getDescription()}</p>
        </div>
      </div>

      {step === 'email' && renderEmailStep()}
      {step === 'otp' && renderOTPStep()}
      {step === 'reset' && renderResetStep()}
    </div>
  );
};