console.log('Module.js')

async function start() {
  return await Promise.resolve('async');
}

start().then(console.log)