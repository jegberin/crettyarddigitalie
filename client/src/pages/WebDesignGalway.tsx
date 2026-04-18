import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function WebDesignGalway() {
  return <CountyLandingPage profile={COUNTIES.galway} service="web-design" />;
}
