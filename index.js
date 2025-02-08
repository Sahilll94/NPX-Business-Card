#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

const centerText = (text) => {
    const terminalWidth = process.stdout.columns || 80;
    return text
        .split("\n")
        .map(line => " ".repeat(Math.max(0, Math.floor((terminalWidth - line.length) / 2))) + line)
        .join("\n");
};

const banner = figlet.textSync("Welcome to Sahil's NPM", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
});
console.log(chalk.magenta.bold(centerText(banner)));

console.log("");

const tagline = "Sahil | Developer | Open Source Enthusiast | Competitive Programmer.";
console.log(chalk.blue.bold(centerText(tagline)));

console.log("");

console.log(chalk.green(centerText("🚀 Let’s connect, build, and grow together!")));

console.log("");


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
