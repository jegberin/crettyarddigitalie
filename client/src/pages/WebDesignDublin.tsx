import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function WebDesignDublin() {
  return <CountyLandingPage profile={COUNTIES.dublin} service="web-design" />;
}
