import { InfoSection } from "widgets/InfoSection";
import { MainSection } from "widgets/MainSection";

export const RootPage = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <MainSection />

        <InfoSection className="mt-4 mr-7" />
      </div>
    </>
  );
};
