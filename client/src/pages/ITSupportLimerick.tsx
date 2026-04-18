import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function ITSupportLimerick() {
  return <CountyLandingPage profile={COUNTIES.limerick} service="it-support" />;
}
