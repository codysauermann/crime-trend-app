import { Button } from "@/components/ui/button";
import Link from "next/link";

const routes = [
  {
      href: "/trend1", 
      label: "Trend 1"
  },
  {
      href: "/trend2", 
      label: "Trend 2"
  },
  {
      href: "/trend3", 
      label: "Trend 3"
  },
  {
    href: "/trend4", 
    label: "Trend 4"
  },
  {
    href: "/trend5", 
    label: "Trend 5"
  },

]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="flex text-3xl font-semibold">The Crime Trends of the City of Los Angeles</h1>
      <div className="flex max-w-[50%] my-16">
        <p className="text-center">Understanding crime trends is crucial for maintaining public safety and informing policy decisions aimed at reducing criminal activity. Los Angeles, California is the second largest city by population, and one of the ten most diverse cities in the United States. For this reason, Los Angeles provides a great case study for crime trends in major metropolitan areas in America. In this project, we aim to create a web application that takes the real world crime data from Los Angeles, and turns it into easy to understand, yet insightful, metrics. The goal of the application is to provide the general public a visual representation of the crime trends in Los Angeles over the last decade.</p>
      </div>
      <div className="flex space-x-4">
      {routes.map((route, i) => (
                        <Button asChild size="lg">
                            <Link 
                            key={i} 
                            href={route.href}
                            className="text-base font-medium transition-colors">
                                {route.label}
                            </Link>
                        </Button>
                    ))}
      </div>
      <div className="my-16">
        <Button size="lg">Total Tuples</Button>
      </div>
    </main>
  );
}
