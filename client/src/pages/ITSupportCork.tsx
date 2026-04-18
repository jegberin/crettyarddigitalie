import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function ITSupportCork() {
  return <CountyLandingPage profile={COUNTIES.cork} service="it-support" />;
}
