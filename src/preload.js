
const electron = require('electron')

process.once('load', ()=>{
  global.ipcRenderer = electron.ipcRenderer
  global.app = electron.remote.app
})
