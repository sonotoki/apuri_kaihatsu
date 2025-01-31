"use client";

import { useTranslations } from "next-intl";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/navigation";

type CardData = {
  id: number;
  title: string;
  description: string;
  href: string;
};

const cardData: CardData[] = [
  {
    id: 6,
    title: "Forms",
    description: "Click here to view forms",
    href: "/forms",
  },
  {
    id: 1,
    title: "Messages",
    description: "Click here to view messages",
    href: "/messages",
  },
  {
    id: 2,
    title: "Students",
    description: "Click here to view students",
    href: "/students",
  },
  {
    id: 4,
    title: "Groups",
    description: "Click here to view groups",
    href: "/groups",
  },
  {
    id: 3,
    title: "Parents",
    description: "Click here to view parents",
    href: "/parents",
  },
  {
    id: 5,
    title: "Admins",
    description: "Click here to view admins",
    href: "/admins",
  },
];

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  return (
    <div className="space-y-6 p-6 bg-dark from-indigo-500  via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="flex justify-center">
        <h1 className="text-5xl font-extrabold text-black tracking-wider drop-shadow-lg">
          {t("Dashboard")}
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {cardData.map((data) => (
          <Link key={data.id} href={data.href} passHref>
            <Card className="w-full h-full bg-blue-300 backdrop-blur-lg rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="p-5">
                <CardTitle className="text-2xl font-semibold">
                  {t(data.title)}
                </CardTitle>
              </CardHeader>
              <CardFooter className="px-5">
                <p className="text-sm text-black">{t(data.description)}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
