import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "./(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout-main">
        <Landing />
      </main>
      <Footer/>
    </div>
  );
}
