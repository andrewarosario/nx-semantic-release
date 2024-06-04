import { danger, message, warn } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

(async () => {
    checkSkipLintLabel();
})();

function checkSkipLintLabel() {
    const hasSkipLintLabel = danger.github.pr.labels.some(label => label.name === 'bug');

    if (hasSkipLintLabel) {
        warn(
            'Olá Dev! Parece que você utilizou a label `bug` nesse PR. Por favor, verifique se o código está correto e remova a label para que o lint seja executado.',
        );
    }
}