import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface LoginFormProps {
  onForgotPassword: () => void;
  onSignUp: () => void;
}

export const LoginForm = ({ onForgotPassword, onSignUp }: LoginFormProps) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleEmailOrPhoneChange = (value: string) => {
    setEmailOrPhone(value);
    if (value && !validateEmailOrPhone(value)) {
      setEmailError("Please enter a valid email address or phone number");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const validation = validatePassword(value);
    if (value && !validation.isValid) {
      setPasswordError("Password does not meet requirements");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmailOrPhone(emailOrPhone)) {
      setEmailError("Please enter a valid email address or phone number");
      return;
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setPasswordError("Password does not meet requirements");
      return;
    }

    // Handle login logic here
    console.log("Login attempt:", { emailOrPhone, password });
  };

  const passwordValidation = validatePassword(password);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif">Welcome Back</h2>
        <p className="text-muted-foreground mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="emailOrPhone">Email or Mobile Number</Label>
          <Input
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => handleEmailOrPhoneChange(e.target.value)}
            className={emailError ? "border-red-500" : emailOrPhone && validateEmailOrPhone(emailOrPhone) ? "border-green-500" : ""}
            placeholder="Enter your email or mobile number"
          />
          {emailError && <p className="text-sm text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              className={passwordError ? "border-red-500 pr-10" : password && passwordValidation.isValid ? "border-green-500 pr-10" : "pr-10"}
              placeholder="Enter your password"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          
          {password && (
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
          
          {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          onClick={onForgotPassword}
          className="text-sm"
        >
          Forgot Password?
        </Button>
      </div>

      <Separator />

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button
            type="button"
            variant="link"
            onClick={onSignUp}
            className="p-0 h-auto font-medium"
          >
            Sign Up
          </Button>
        </p>
      </div>
    </div>
  );
};