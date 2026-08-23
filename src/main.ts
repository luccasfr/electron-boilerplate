import { app, BrowserWindow, ipcMain, shell } from "electron";
import type { IpcMainEvent } from "electron";
import path from "path";
import started from "electron-squirrel-startup";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    try {
      const url = new URL(details.url);
      if (url.protocol === "https:" || url.protocol === "http:") {
        void shell.openExternal(url.toString());
      }
    } catch {
      // Ignore malformed URLs instead of passing them to the operating system.
    }

    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event) => {
    event.preventDefault();
  });

  mainWindow.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => callback(false)
  );

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools({
    mode: "detach",
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const isTrustedIpcEvent = (event: IpcMainEvent) => {
  const senderWindow = BrowserWindow.fromWebContents(event.sender);
  return senderWindow !== null && event.senderFrame === event.sender.mainFrame;
};

ipcMain.on("quit", (event) => {
  if (!isTrustedIpcEvent(event)) return;
  app.quit();
});

ipcMain.on("minimize", (event) => {
  if (!isTrustedIpcEvent(event)) return;
  BrowserWindow.fromWebContents(event.sender)?.minimize();
});

ipcMain.on("maximize", (event) => {
  if (!isTrustedIpcEvent(event)) return;
  const senderWindow = BrowserWindow.fromWebContents(event.sender);
  if (senderWindow?.isMaximized()) {
    senderWindow.unmaximize();
  } else {
    senderWindow?.maximize();
  }
});
