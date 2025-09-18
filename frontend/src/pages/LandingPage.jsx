import React from "react";
import LiquidEther from "../common/LiquidEther";
import PillNav from "../common/PillNav";
import SplitText from "../common/SplitText";
import CardSwap, { Card } from "../common/CardSwap";
import ModelViewer from "../common/ModalViewer";
import CircularGallery from "../common/CicularGallary";

const LandingPage = () => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* background                                            background on whole screen */}
        <div className="absolute inset-0">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

      {/* Hero section */}
      <div className="relative w-full overflow-hidden h-screen">
        {/* background                                    Background, only on Hero section                    */}
        {/* <div className="absolute inset-0">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div> */}

        {/* Nav bar */}
        <div className="relative z-10">
          <PillNav
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#oboa11"
            pillColor="#1a152a"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#eae6ff"
          />
        </div>

        {/* Split Text Animation */}
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none">
          <SplitText
            text="Welcome to the Landing Page"
            className="text-5xl font-semibold text-center pointer-events-auto"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </div>

      {/* Card Swap Section */}
      <div className="h-[600px] overflow-hidden relative py-16 mb-24">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>

      {/* Modal viewer */}
      {/* <div className="w-full h-[500px] flex justify-center items-center mb-20">
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
          width={"100%"}
          height={"100%"}
        />
      </div> */}

      {/* Circular gallery */}
      <div className="h-[600px] relative py-10">
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

      {/* How to use section */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Step 1: Install
              </h2>
              <p className="text-white/80 mb-4">
                Install the package using your preferred manager.
              </p>
              <p className="text-white/70 text-sm">
                Example:{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded">
                  npm i your-package
                </code>{" "}
                or{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded">
                  yarn add your-package
                </code>
                .
              </p>
            </div>
            {/* <div className="relative"> */}
            <button className="relative inline-flex h-auto overflow-hidden rounded-3xl p-[1px] focus:outline-none backdrop-blur-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                <img
                  src="/vite.svg"
                  alt="Install Preview"
                  className="w-full h-full object-contain p-6"
                />
              </span>
            </button>
            {/* </div> */}
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                <div className="rounded-2xl overflow-hidden bg-black/20 aspect-[16/10]">
                  <img
                    src="/vite.svg"
                    alt="Import Preview"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Step 2: Import
              </h2>
              <p className="text-white/80 mb-4">
                Import the component into your page or layout.
              </p>
              <p className="text-white/70 text-sm">
                Example:{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded">
                  import Component from 'your-package'
                </code>
                .
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Step 3: Configure
              </h2>
              <p className="text-white/80 mb-4">
                Pass the props and tailor the look and behavior.
              </p>
              <p className="text-white/70 text-sm">
                Example:{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded">
                  &lt;Component propA="value" /&gt;
                </code>
                .
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                <div className="rounded-2xl overflow-hidden bg-black/20 aspect-[16/10]">
                  <img
                    src="/vite.svg"
                    alt="Configure Preview"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                <div className="rounded-2xl overflow-hidden bg-black/20 aspect-[16/10]">
                  <img
                    src="/vite.svg"
                    alt="Deploy Preview"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Step 4: Deploy
              </h2>
              <p className="text-white/80 mb-4">
                Deploy to your hosting platform and share it with users.
              </p>
              <p className="text-white/70 text-sm">
                Example: push to your repo and trigger your CI/CD to
                Vercel/Netlify.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
