
const { app, BrowserWindow } = require('electron')
let mainWindow

function createWindow(params) {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 1200,
    height: 600
  });

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', ()=> {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
});

app.on('active', () => {
  createWindow()
})
