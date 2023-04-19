const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const envs = require('../data/envs.json');

async function getUrlByEnv(){
    return envs[argv.env];
}

module.exports = { getUrlByEnv };