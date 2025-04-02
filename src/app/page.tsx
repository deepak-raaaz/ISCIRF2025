import HeroSection from "@/components/landing-page/Hero";
import AboutISCIRF from "@/components/landing-page/AboutISCIRF";
import AboutHIT from "@/components/landing-page/AboutHIT";
import EventSchedule from "@/components/landing-page/EventSchedule";
import MeetOurGuestSpeakers from "@/components/landing-page/MeetOurGuestSpeakers";
import OrganizingCommittee from "@/components/landing-page/OrganizingCommittee";
import AdvisoryCommittees from "@/components/landing-page/AdvisoryCommittees";
import AboutDepartment from "@/components/landing-page/AboutDepartment";
import Scope from "@/components/landing-page/Scope";
import Themes from "@/components/landing-page/Themes";
import Sponsor from "@/components/landing-page/Sponsor";
import StudentCommittee from "@/components/landing-page/StudentCommittee";
export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutISCIRF />
      <AboutHIT />
      <AboutDepartment />
      <EventSchedule />
      <MeetOurGuestSpeakers />
      <OrganizingCommittee />
      <AdvisoryCommittees />
      <StudentCommittee />
      <Scope />
      <Themes />
      <Sponsor />
    </main>
  );
}
