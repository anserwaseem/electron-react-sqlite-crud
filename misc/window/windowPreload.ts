import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron_window", {});
