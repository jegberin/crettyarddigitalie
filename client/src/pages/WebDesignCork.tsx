import { CountyLandingPage } from "@/components/CountyLandingPage";
import { COUNTIES } from "@/data/countyContent";

export default function WebDesignCork() {
  return <CountyLandingPage profile={COUNTIES.cork} service="web-design" />;
}
