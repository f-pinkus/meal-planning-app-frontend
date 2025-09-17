import React from "react";

export default function GenerateMenuButton({ onGenerated }) {
  const handleGenerate = async () => {
    
    const menuPrompt = window.prompt("What kind of meal are you looking for?");
    if (!menuPrompt) return;

    // Ask the user for a title (optional)
    const menuTitle = window.prompt("Enter a title for your menu:") || "Untitled Menu";

    try {
      const response = await fetch("http://localhost:3000/menus/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: menuPrompt, title: menuTitle }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const menu = await response.json();

      // Call parent callback to populate form fields
      onGenerated(menu);

    } catch (error) {
      console.error("Error generating menu:", error);
      alert("Failed to generate menu. See console for details.");
    }
  };

  return (
    <button
      type="button"
      className="btn btn-secondary mb-3"
      onClick={handleGenerate}
    >
      Generate Menu
    </button>
  );
}
