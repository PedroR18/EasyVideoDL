# EasyVideoDL

**Platform:** macOS | Windows
**License:** MIT
**Tool:** yt-dlp
**Scripts:** Bash | PowerShell  

**Created by Aco Vidovic with AI assistance from ChatGPT**  

---

## 📖 **Table of Contents**
1. 🎬 What Is EasyVideoDL?  
2. ⚡ Quick Start Summary (for Experienced Users)  
3. ⚙️ Installation  
   - 3.1 💡 Automatic Installation (Recommended)  
   - 3.2 🧰 Manual Installation (Alternative)  
4. ▶️ Running EasyVideoDL  
5. 🧹 Uninstalling EasyVideoDL (Optional)  
6. 🎓 Example Commands (for Advanced Users)  
7. 🧩 Troubleshooting & Common Issues  
8. 📚 Official Resources  
9. 🧾 License  

---

### **1. 🎬 What Is EasyVideoDL?**

**EasyVideoDL** is a simple, cross-platform tool (for **macOS** and **Windows**) that helps you download videos — even from **login-protected websites** — using the powerful open-source engine [yt-dlp](https://github.com/yt-dlp/yt-dlp).  

It automates complex terminal commands into an easy guided process. Whether you're downloading a single lecture or an entire online course, EasyVideoDL ensures high-quality audio + video merging with minimal effort.

> ⚠️ Always use this tool responsibly and only for videos you are legally authorized to access.

---

### **2. ⚡ Quick Start Summary (for Experienced Users)**

```bash
# macOS
chmod +x ./install-mac.sh && ./install-mac.sh
./hf-dl.sh

# Windows (PowerShell)
.\install-win.ps1
.\hf-dl-win.ps1
```

> 💡 Full, detailed installation and usage instructions follow below.

---

### **3. ⚙️ Installation**

Choose **only one** of the following two options — either *Automatic* or *Manual*.  
Do **not** install both ways on the same system.

---

#### **3.1 💡 Automatic Installation (Recommended)**

If you’re new to command-line tools, this is the **easiest** way to set up EasyVideoDL.  
The provided install scripts will automatically install all required tools (yt-dlp + ffmpeg), set permissions, and prepare the environment.

##### 🍎 macOS Installation

```bash
chmod +x ./install-mac.sh
./install-mac.sh
```

This installs **Homebrew**, then **yt-dlp** and **ffmpeg**, and makes the helper script executable.

##### 💻 Windows Installation

```powershell
.\install-win.ps1
```

This installs **yt-dlp** and **ffmpeg** via `winget`, sets PowerShell execution policy, and unblocks the helper script.

> ✅ When complete, you’ll be ready to run EasyVideoDL immediately.  
> 💡 **Tip:** If `yt-dlp` works but PowerShell says `ffmpeg` is not recognized, check the Troubleshooting section for the fix.

---

#### **3.2 🧰 Manual Installation (Alternative)**

> ⚠️ **Do this only if you skipped the Automatic Installation** or prefer to install tools manually.

##### macOS

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yt-dlp ffmpeg
```

##### Windows

```powershell
winget install yt-dlp.yt-dlp
winget install Gyan.FFmpeg
```

---

### **4. ▶️ Running EasyVideoDL**

```bash
# macOS
./hf-dl.sh

# Windows
.\hf-dl-win.ps1
```

When you run the helper, it prompts for:

1. **Video or Playlist URL**  
2. **Cookies file** (`cookies.txt`)  
3. **Output folder**  
4. **Playlist or single video**  

---

### **5. 🧹 Uninstalling EasyVideoDL (Optional)**

##### macOS

```bash
chmod +x ./uninstall-mac.sh
./uninstall-mac.sh
```

##### Windows

```powershell
.\uninstall-win.ps1
```

---

### **6. 🎓 Example Commands (for Advanced Users)**

```bash
# Single video
yt-dlp --cookies cookies.txt -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(title)s.%(ext)s" "https://example.com/video-url"

# Playlist
yt-dlp --cookies cookies.txt --yes-playlist -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s" \
  "https://example.com/course-url"
```

---

### **7. 🧩 Troubleshooting & Common Issues**

#### ⚠️ Two separate files (video + audio)
Install ffmpeg using installer scripts or manual method, then re-run EasyVideoDL.

#### 🔐 PowerShell says “script is not digitally signed”
```powershell
Unblock-File -Path .\hf-dl-win.ps1
```

#### 🔄 Cookies expired or login required
Re-export cookies from Chrome using **Get cookies.txt LOCALLY**.

#### 🧩 FFmpeg not recognized on Windows
Windows PATH may not have refreshed. Try:

##### ✅ 1 – Restart PowerShell
```powershell
yt-dlp --version
ffmpeg -version
```

##### ⚙️ 2 – Refresh PATH manually
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' +
            [System.Environment]::GetEnvironmentVariable('Path','User')
$wingetLinks = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links'
if (-not ( ($env:Path -split ';') -contains $wingetLinks )) {
  $env:Path = "$env:Path;$wingetLinks"
}
ffmpeg -version
```

##### 🧭 3 – Add ffmpeg.exe folder permanently
```powershell
$ffbin = Split-Path -Parent (Get-Command ffmpeg).Source
$u = [System.Environment]::GetEnvironmentVariable('Path','User')
setx PATH "$u;$ffbin"
```

##### 🧠 4 – Use auto-detect helper
The Windows helper (`hf-dl-win.ps1`) can auto-detect ffmpeg automatically.

---

### **8. 📚 Official Resources**

- yt-dlp GitHub repo: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)  
- ffmpeg Docs: [https://ffmpeg.org/documentation.html](https://ffmpeg.org/documentation.html)

---

### **9. 🧾 License**

Released under the **MIT License**.  
**Created by Aco Vidovic with AI assistance from ChatGPT.**
