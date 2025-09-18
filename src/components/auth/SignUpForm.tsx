import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface SignUpFormProps {
  onSignIn: () => void;
}

export const SignUpForm = ({ onSignIn }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile: string) => {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return phoneRegex.test(mobile);
  };

  const validateFullName = (name: string) => {
    return name.trim().length >= 2;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    let error = "";
    switch (field) {
      case 'fullName':
        if (value && !validateFullName(value)) {
          error = "Full name must be at least 2 characters";
        }
        break;
      case 'email':
        if (value && !validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case 'mobile':
        if (value && !validateMobile(value)) {
          error = "Please enter a valid mobile number";
        }
        break;
      case 'password':
        if (value && !validatePassword(value).isValid) {
          error = "Password does not meet requirements";
        }
        break;
      case 'confirmPassword':
        if (value && value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      fullName: !validateFullName(formData.fullName) ? "Full name is required" : "",
      email: !validateEmail(formData.email) ? "Valid email is required" : "",
      mobile: !validateMobile(formData.mobile) ? "Valid mobile number is required" : "",
      password: !validatePassword(formData.password).isValid ? "Password does not meet requirements" : "",
      confirmPassword: formData.password !== formData.confirmPassword ? "Passwords do not match" : ""
    };
    
    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (!hasErrors) {
      // Handle signup logic here
      console.log("Sign up attempt:", formData);
    }
  };

  const passwordValidation = validatePassword(formData.password);

  const getFieldClassName = (field: string, validationFn?: (value: string) => boolean) => {
    const value = formData[field as keyof typeof formData];
    const hasError = errors[field as keyof typeof errors];
    
    if (hasError) return "border-red-500";
    if (value && validationFn && validationFn(value)) return "border-green-500";
    if (field === 'password' && value && passwordValidation.isValid) return "border-green-500";
    if (field === 'confirmPassword' && value && value === formData.password && formData.password) return "border-green-500";
    
    return "";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif">Create Account</h2>
        <p className="text-muted-foreground mt-2">Join us today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={getFieldClassName('fullName', validateFullName)}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={getFieldClassName('email', validateEmail)}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            className={getFieldClassName('mobile', validateMobile)}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`${getFieldClassName('password')} pr-10`}
              placeholder="Create a password"
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
          
          {formData.password && (
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
          
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`${getFieldClassName('confirmPassword')} pr-10`}
              placeholder="Confirm your password"
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
          Sign Up
        </Button>
      </form>

      <Separator />

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Button
            type="button"
            variant="link"
            onClick={onSignIn}
            className="p-0 h-auto font-medium"
          >
            Sign In
          </Button>
        </p>
      </div>
    </div>
  );
};