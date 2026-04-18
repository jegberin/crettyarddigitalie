import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function ITSupportGalway() {
  return <CountyLandingPage profile={COUNTIES.galway} service="it-support" />;
}
