import React, { useState } from "react";
import { Link } from "@/navigation";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

import { useTheme } from "next-themes";

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Setting() {
  const t = useTranslations("errors");
  const { setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsDarkMode(checked); // Update state
    if (isDarkMode) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <div>
          <Button>
            <Link href="/">{t("returnHome")}</Link>
          </Button>

          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode"
              checked={isDarkMode} // Bind state to the switch
              onCheckedChange={handleSwitchChange} // Handle switch toggle
            />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
