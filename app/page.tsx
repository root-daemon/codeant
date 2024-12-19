"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [loginType, setLoginType] = useState<"saas" | "self-hosted">("saas");

  const loginOptions = {
    saas: [
      { src: "/github.png", alt: "GitHub Logo", text: "Sign in with GitHub" },
      {
        src: "/bitbucket.png",
        alt: "Bitbucket Logo",
        text: "Sign in with Bitbucket",
      },
      {
        src: "/azure.png",
        alt: "Azure DevOps Logo",
        text: "Sign in with Azure DevOps",
      },
      { src: "/gitlab.png", alt: "GitLab Logo", text: "Sign in with GitLab" },
    ],
    "self-hosted": [
      { src: "/gitlab.png", alt: "GitLab Logo", text: "Sign in with GitLab" },
      { src: "/key.png", alt: "SSO Logo", text: "Sign in with SSO" },
    ],
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-8 py-4 md:p-8">
      {/* Stats Section */}
      <div>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <Image
              src="/card-logo.png"
              alt="CodeAnt AI Logo"
              width={24}
              height={24}
              className="mb-2"
              priority
            />
            <h2 className="font-semibold mb-4">
              AI to Detect & Autofix Bad Code
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-bold">30+</div>
                <div className="text-sm text-muted-foreground">
                  Language Support
                </div>
              </div>
              <div>
                <div className="font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div>
                <div className="font-bold">100K+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
              </div>
              <span className="text-sm text-green-600">↑ 14% This week</span>
            </div>
            <div className="text-sm text-muted-foreground">Issues Fixed</div>
            <div className="text-2xl font-bold">500K+</div>
          </div>
          <Image
            src="/footer.png"
            width={100}
            height={100}
            alt="CodeAnt AI Logo"
          />
        </div>
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="/header.png"
              alt="CodeAnt AI Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
              priority
            />
            <h1 className="text-2xl font-semibold mb-8">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Radio Group for Login Type */}
          <RadioGroup
            value={loginType}
            onValueChange={(value) =>
              setLoginType(value as "saas" | "self-hosted")
            }
            className="flex gap-4 mb-8"
          >
            <div className="flex-1">
              <RadioGroupItem value="saas" id="saas" className="peer sr-only" />
              <Label
                htmlFor="saas"
                className="flex items-center justify-center w-full p-3 text-sm font-medium border rounded-md peer-data-[state=checked]:bg-blue-600 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-blue-600 hover:bg-blue-100"
              >
                SAAS
              </Label>
            </div>
            <div className="flex-1">
              <RadioGroupItem
                value="self-hosted"
                id="self-hosted"
                className="peer sr-only"
              />
              <Label
                htmlFor="self-hosted"
                className="flex items-center justify-center w-full p-3 text-sm font-medium border rounded-md peer-data-[state=checked]:bg-blue-600 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-blue-600 hover:bg-blue-100"
              >
                Self Hosted
              </Label>
            </div>
          </RadioGroup>

          {/* Login Options */}
          <div className="space-y-4">
            {loginOptions[loginType].map((option, index) => (
              <button
                key={index}
                className="flex items-center justify-center w-full gap-2 p-3 border rounded-lg hover:bg-accent"
              >
                <Image
                  src={option.src}
                  alt={option.alt}
                  width={20}
                  height={20}
                />
                {option.text}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            By signing up you agree to the{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
