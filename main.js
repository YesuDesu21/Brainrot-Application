const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 292,
    height: 430,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: false,
  
    webPreferences: {
    contextIsolation: true,
    preload: path.join(__dirname, 'preload.js')
  }
  });

win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on('quit-app', () => {
  app.quit()
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});