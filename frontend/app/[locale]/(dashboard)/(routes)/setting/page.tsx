'use client'
import LanguageSelect from "@/components/LanguageSelect";
import Setting from "@/components/SettingPage";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
    const t = useTranslations("setting");
  
    return (
      <div className="space-y-6 p-6 bg-dark from-indigo-500  via-purple-500 to-pink-500 min-h-screen text-black">
        <div className="flex justify-center">
          <div>
          <LanguageSelect />
          </div>
        </div>
        <div>
        <Setting />
        </div>
      </div>
    );
  }
  