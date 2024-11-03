let options = [
    '--require-module ts-node/register',
    '--require ./steps/*.steps.ts',
    '--format progress',
    '--format json:./reports/cucumber_report.json'
].join(' ');

// let run_features = [
//     './features/scenario4.feature',
//     options,
// ].join(' ');

module.exports = {
    test_runner: options
};