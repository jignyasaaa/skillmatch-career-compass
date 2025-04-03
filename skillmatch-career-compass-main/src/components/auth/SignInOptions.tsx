
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, Github, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface SignInOptionsProps {
  onSignIn: () => void;
}

const SignInOptions = ({ onSignIn }: SignInOptionsProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sign in
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signed In",
        description: "You have successfully signed in.",
      });
      onSignIn();
    }, 1500);
  };
  
  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created",
        description: "Your account has been created successfully.",
      });
      onSignIn();
    }, 1500);
  };
  
  const handleSocialSignIn = (provider: string) => {
    setIsLoading(true);
    
    // Simulate social sign in
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${provider} Sign In`,
        description: `You have successfully signed in with ${provider}.`,
      });
      onSignIn();
    }, 1500);
  };
  
  return (
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      
      <TabsContent value="signin" className="space-y-4 py-4">
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignIn('Google')}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Google
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignIn('GitHub')}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="signup" className="space-y-4 py-4">
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="name"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="signup-email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignIn('Google')}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Google
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignIn('GitHub')}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SignInOptions;
