import React from 'react';

// supabase
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from '@/utils/supabase';

// components
import { AuthLayout } from '@/components/layout/auth-layout';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email below to create your account
          </p>
        </div>

        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />

        <p className="text-muted-foreground px-8 text-center text-sm">
          By clicking continue, you agree to our{' '}
          <a
            href="/terms"
            className="hover:text-primary underline underline-offset-4"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="hover:text-primary underline underline-offset-4"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
