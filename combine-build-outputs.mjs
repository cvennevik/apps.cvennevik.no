import { cp, rm } from "fs/promises";

// Remove existing files
await rm("dist", { recursive: true, force: true });

// Copy root page to dist
await cp("root", "dist", { recursive: true });

// Copy each web app to its own sub-directory
const appNames = ["hello-world", "hello-world-2"];
for (const appName of appNames) {
  await cp(`${appName}/dist`, `dist/${appName}`, { recursive: true });
}
