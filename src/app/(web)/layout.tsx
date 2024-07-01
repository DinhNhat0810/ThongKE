import AppBar from "@/components/appBar/AppBar";
import Sidebar from "@/components/sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <AppBar />
        <div className="content-wrapper_bot">{children}</div>
      </div>
    </div>
  );
}
