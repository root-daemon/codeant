"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-8 py-4 md:p-8">
      {/* Stats Section */}
      <div>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <Image
              src="/card-logo.png"
              alt="CodeAnt AI Logo"
              width={16}
              height={16}
              className="mb-2"
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

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="/header.png"
              alt="CodeAnt AI Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-semibold mb-8">
              Welcome to CodeAnt AI
            </h1>
          </div>

          <RadioGroup
            defaultValue="saas"
            className="grid grid-cols-2 gap-4 mb-8"
          >
            <div>
              <RadioGroupItem value="saas" id="saas" className="peer sr-only" />
              <Label
                htmlFor="saas"
                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                SAAS
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="self-hosted"
                id="self-hosted"
                className="peer sr-only"
              />
              <Label
                htmlFor="self-hosted"
                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Self Hosted
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <button className="flex items-center justify-center w-full gap-2 p-3 border rounded-lg hover:bg-accent">
              <Image
                src="/github.png"
                alt="GitHub Logo"
                width={20}
                height={20}
              />
              Sign in with GitHub
            </button>
            <button className="flex items-center justify-center w-full gap-2 p-3 border rounded-lg hover:bg-accent">
              <Image
                src="/bitbucket.png"
                alt="Bitbucket Logo"
                width={20}
                height={20}
              />
              Sign in with Bitbucket
            </button>
            <button className="flex items-center justify-center w-full gap-2 p-3 border rounded-lg hover:bg-accent">
              <Image
                src="/azure.png"
                alt="Azure DevOps Logo"
                width={20}
                height={20}
              />
              Sign in with Azure DevOps
            </button>
            <button className="flex items-center justify-center w-full gap-2 p-3 border rounded-lg hover:bg-accent">
              <Image
                src="/gitlab.png"
                alt="GitLab Logo"
                width={20}
                height={20}
              />
              Sign in with GitLab
            </button>
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
