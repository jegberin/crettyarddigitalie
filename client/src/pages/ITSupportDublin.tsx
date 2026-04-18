import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function ITSupportDublin() {
  return <CountyLandingPage profile={COUNTIES.dublin} service="it-support" />;
}
