// source:https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg

const execa = require('execa');
const emoji = require('node-emoji');
const chalk = require('chalk');
const fs = require('fs');

const e_arrows = emoji.get('fast_forward');
const e_rocket = emoji.get('rocket');
const e_x = emoji.get('x');

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'master']);

    console.log(`${e_arrows} ${chalk.yellow('Building...')}`);
    await execa('npm', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = 'public';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'master']);

    console.log(`${e_arrows} ${chalk.yellow('Pushing...')}`);
    await execa('git', ['push', 'origin', 'HEAD:master', '--force']);

    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', 'codebase']);
    await execa('git', ['branch', '-D', 'master']);
    console.log(`${e_rocket} ${chalk.green('Successfully deployed')} ${e_rocket}`);
  } catch (e) {
    console.log(`${e_x} ${chalk.red('An error occured')} ${e_x}\n${e.message}`);
    process.exit(1);
  }
})();