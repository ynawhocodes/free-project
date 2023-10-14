import ExamplePage from "../_assets/example";
import { Example } from "../_assets/icons";

const ExampleSection = () => {
  return (
    <div className="h-[200vh] pb-10 relative pt-[50%]">
      <div className="flex sticky top-1/2 -translate-y-1/2">
        <div className="pt-10 pl-1">
          <Example />
        </div>
        <div className="flex-1 flex justify-center pt-10 relative">
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
          <ExamplePage />
        </div>
      </div>
    </div>
  );
};

export default ExampleSection;
