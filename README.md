# Chrome URL Opener Extension

A lightweight Chrome extension that allows you to open the current browser tab in another service with a single click.

Built for learning browser extension architecture, tab APIs, and URL handling.

---

## ✨ Features

- Read the active tab URL
- Transform the URL
- Open a new tab automatically
- Minimal permissions
- Manifest V3

---


---

## 🚀 Installation (Developer Mode)

1. Open Chrome and visit:


2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the project folder

---

## 🧠 How It Works

When the extension icon is clicked:

1. The background service worker reads the active tab.
2. The URL is processed.
3. A new tab is opened with the destination address.

---

## 🔒 Permissions

- `tabs` → required to read the current tab URL.

---

## 🎯 Purpose of This Project

This project is intended for:

- learning Chrome extension development  
- understanding event-driven architecture  
- practicing browser APIs  
- experimenting with URL transformations  

---

## 🛠 Future Improvements

- popup UI
- keyboard shortcuts
- multiple destinations
- history
- notifications
- backend integration

---

## 📜 License

MIT License
