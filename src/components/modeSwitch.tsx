import { useState } from "react";

function ModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.classList.contains("dark") ? true : false;
  });
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer"
        type="checkbox"
        onChange={handleToggle}
        checked={isDarkMode}
      />
      <div className="w-15 h-8 rounded-full bg-gradient-to-r from-White to-secondary peer-checked:from-White peer-checked:to-primary transition-all duration-500 after:content-['🔅'] after:absolute after:top-0.75 after:left-0.75 after:bg-white after:rounded-full after:h-7 after:w-7 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-6.5 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
    </label>
  );
}

export default ModeSwitch;
