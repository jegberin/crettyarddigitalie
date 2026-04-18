import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function WebDesignWaterford() {
  return <CountyLandingPage profile={COUNTIES.waterford} service="web-design" />;
}
