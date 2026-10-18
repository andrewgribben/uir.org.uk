import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readdir, rm, cp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const run = (command, args, cwd = projectRoot) =>
  execFileSync(command, args, { cwd, stdio: "inherit" });
const capture = (command, args, cwd = projectRoot) =>
  execFileSync(command, args, { cwd, encoding: "utf8" }).trim();

run("npm", ["run", "build"]);

const remote = capture("git", ["remote", "get-url", "origin"]);
const temporaryRoot = await mkdtemp(join(tmpdir(), "uir-pages-"));
const temporaryPath = join(temporaryRoot, "site");

try {
  let remoteBranchExists = false;
  try {
    capture("git", ["ls-remote", "--exit-code", "--heads", remote, "gh-pages"]);
    remoteBranchExists = true;
  } catch (error) {
    if (error.status !== 2) throw error;
  }

  if (remoteBranchExists) {
    run("git", ["clone", "--depth", "1", "--branch", "gh-pages", remote, temporaryPath]);
  } else {
    await mkdir(temporaryPath);
    run("git", ["init", "--initial-branch=gh-pages"], temporaryPath);
    run("git", ["remote", "add", "origin", remote], temporaryPath);
  }

  for (const entry of await readdir(temporaryPath)) {
    if (entry !== ".git") await rm(join(temporaryPath, entry), { recursive: true, force: true });
  }

  await cp(join(projectRoot, "dist"), temporaryPath, { recursive: true });
  await rm(join(temporaryPath, ".openai"), { recursive: true, force: true });
  await writeFile(join(temporaryPath, ".nojekyll"), "");
  await writeFile(join(temporaryPath, "CNAME"), "uir.org.uk\n");

  run("git", ["add", "--all"], temporaryPath);
  const changed = capture("git", ["status", "--porcelain"], temporaryPath);
  if (!changed) {
    console.log("GitHub Pages is already up to date.");
  } else {
    run("git", ["-c", "user.name=ÚIR Pages deploy", "-c", "user.email=pages-deploy@uir.org.uk", "commit", "-m", "Deploy static site"], temporaryPath);
    run("git", ["push", "origin", "gh-pages"], temporaryPath);
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}
