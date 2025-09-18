import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';

type AuthView = 'login' | 'signup' | 'forgot';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: AuthView;
}

export const AuthModal = ({ isOpen, onClose, initialView = 'login' }: AuthModalProps) => {
  const [currentView, setCurrentView] = useState<AuthView>(initialView);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6">
        {currentView === 'login' && (
          <LoginForm
            onForgotPassword={() => setCurrentView('forgot')}
            onSignUp={() => setCurrentView('signup')}
          />
        )}
        
        {currentView === 'signup' && (
          <SignUpForm
            onSignIn={() => setCurrentView('login')}
          />
        )}
        
        {currentView === 'forgot' && (
          <ForgotPasswordForm
            onBack={() => setCurrentView('login')}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};