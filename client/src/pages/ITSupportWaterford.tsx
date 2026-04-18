import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function ITSupportWaterford() {
  return <CountyLandingPage profile={COUNTIES.waterford} service="it-support" />;
}
