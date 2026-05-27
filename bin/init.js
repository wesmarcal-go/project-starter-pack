#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcSkills = path.join(__dirname, '..', '.claude', 'skills');
const srcAgents = path.join(__dirname, '..', 'AGENTS.md');
const destSkills = path.join(process.cwd(), '.claude', 'skills');
const destAgents = path.join(process.cwd(), 'AGENTS.md');

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const args = process.argv.slice(2);
const force = args.includes('--force');

if (fs.existsSync(destSkills) && !force) {
  const existing = fs.readdirSync(destSkills);
  if (existing.length > 0) {
    console.log(`\n.claude/skills/ ja existe com ${existing.length} skill(s).`);
    console.log('Use --force para sobrescrever:\n');
    console.log('  npx @wesmarcal/claude-starter --force\n');
    process.exit(1);
  }
}

copyDir(srcSkills, destSkills);

if (!fs.existsSync(destAgents) || force) {
  fs.copyFileSync(srcAgents, destAgents);
}

const installed = fs.readdirSync(destSkills);
console.log('\nSkills instaladas em .claude/skills/:\n');
for (const skill of installed) {
  console.log(`  - ${skill}`);
}
console.log('\nAGENTS.md criado na raiz (lido por Cursor, Windsurf, Cline e outros assistentes).');
console.log('\nNo Claude Code: use /create-a-context, /grill-me ou /write-a-skill');
console.log('Em outros assistentes: use os trigger phrases descritos em AGENTS.md\n');
