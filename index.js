#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

// Function to center text manually;
const centerText = (text) => {
    const terminalWidth = process.stdout.columns || 80; // Default to 80 if undefined
    return text
        .split("\n") // Split into lines (for multi-line text like figlet output)
        .map(line => " ".repeat(Math.max(0, Math.floor((terminalWidth - line.length) / 2))) + line)
        .join("\n"); // Rejoin lines
};

const banner = figlet.textSync("Welcome to Sahil's NPM", {
    font: "Standard", // Try 'Big', 'Slant', etc.
    horizontalLayout: "default",
    verticalLayout: "default",
});
console.log(chalk.magenta.bold(centerText(banner)));

console.log("");

const tagline = "Sahil | Developer | Open Source Enthusiast | Competitive Programmer.";
console.log(chalk.blue.bold(centerText(tagline)));

console.log("");

console.log(chalk.green(centerText("🚀 Let’s connect, build, and grow together!")));
// console.log(chalk.green("🚀 Let’s connect, build, and grow together!"));    

console.log("");

// console.log(chalk.cyan("Portfolio: ") + "https://sahilportfolio.me/");
// console.log(chalk.cyan("GitHub: ") + "https://github.com/Sahilll94");
// console.log(chalk.cyan("LinkedIn: ") + "https://www.linkedin.com/in/sahilll94");
// console.log(chalk.cyan("Twitter: ") + "https://x.com/Sa_hilll94");
// console.log(chalk.cyan("Hashnode: ") + "https://hashnode.com/@Sahilll94");
// console.log(chalk.cyan("Medium: ") + "https://medium.com/@sa_hilll94");

const socialLinks = [
    chalk.cyan("Portfolio: ") + "https://sahilportfolio.me/",
    chalk.cyan("GitHub: ") + "https://github.com/Sahilll94",
    chalk.cyan("LinkedIn: ") + "https://www.linkedin.com/in/sahilll94",
    chalk.cyan("Twitter: ") + "https://x.com/Sa_hilll94",
    chalk.cyan("Hashnode: ") + "https://hashnode.com/@Sahilll94",
    chalk.cyan("Medium: ") + "https://medium.com/@sa_hilll94"
];

socialLinks.forEach(link => console.log(centerText(link)));

console.log("");

console.log(chalk.green(centerText("🌟 Consistency is Key — Keep Coding! 🚀")));
// console.log(chalk.green("🌟 Consistency is Key — Keep Coding! 🚀"));
