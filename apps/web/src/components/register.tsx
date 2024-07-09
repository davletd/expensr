import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Label } from "./label"
import { Input } from "./input"
import { Button } from "./button"

const Regoster: React.FC = () => {

	const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


	const registerMutation = useMutation(
    (credentials: { username: string; email: string, password: string }) =>
      fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        navigate('/login');
      },
			onError: (error) => {
				console.error('Register failed', error);
			}
    }
  );

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		registerMutation.mutate({ username, email, password });
	};

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Register for a new account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <a href="/login" className="font-medium text-primary hover:text-primary/80">
              sign in to your account
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="username" className="block text-sm font-medium text-muted-foreground">
              Username
            </Label>
            <div className="mt-1">
              <Input
                id="username"
                name="username"
								value={username}
								onChange={(e) => {setUsername(e.target.value); setEmail(e.target.value)}}
                type="text"
                autoComplete="username"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
							disabled={registerMutation.isLoading}
              className="flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {registerMutation.isLoading ? 'Registering...' : 'Register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Regoster;