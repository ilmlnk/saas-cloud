import LandingFooter from "@/components/LandingFooter";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-tr from-[#242424] to-[#134e86] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
    </div>
    <LandingFooter/>
    </main>
  );
};

export default LandingLayout;
