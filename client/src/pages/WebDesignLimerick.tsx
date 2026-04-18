import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function WebDesignLimerick() {
  return <CountyLandingPage profile={COUNTIES.limerick} service="web-design" />;
}
