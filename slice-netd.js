#!/usr/bin/env node

const { exec } = require('child_process');
const flags = require('ray-flags');

if (flags.v) console.log("v1.0.0");

const port = flags.p || 4321;
const startingTimeout = 1000*5; // 5 second timeout for previous child process instance to die
const restartTimeout = 1000*60*5; // 5 minute timeout before restarting the child process
let sliceNet;

if (flags.d) {
  startSliceNetDownloads();
  setInterval(()=>{
    sliceNet.kill();
  }, restartTimeout);
}

function startSliceNetDownloads() {
  setTimeout(()=>{
    sliceNet = exec(`slice-net -d -ip ${flags.ip} -p ${port}`); // no delete shards option yet
    sliceNet.stdout.on('data', (data) => {console.log(`stdout: ${data}`)});
    sliceNet.stderr.on('data', (data) => {console.error(`stderr: ${data}`)});
    sliceNet.on('close', (code, sig) => {
      console.log(`child process exited with code ${code} and sig ${sig}`);
      startSliceNetDownloads();
    });
  }, startingTimeout); 
}

