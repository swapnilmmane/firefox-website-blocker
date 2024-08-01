## Overview

Website Blocker is a simple Firefox extension that allows users to block access to specified websites. Users can enter multiple website URLs separated by commas, and the extension will block access to those sites. The list of blocked sites is saved and persists across browser sessions.

## Features

- Block multiple websites by entering URLs separated by commas.
- Simple user interface to add and remove blocked sites.

## Installation Instructions

### Prerequisites

- Firefox browser

### Steps to Temporarily Load the Extension in Firefox

1. **Download the Project**: Clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/swapnilmmane/firefox-website-blocker.git
   cd website-blocker-extension
   ```

2. **Open Firefox and Enable Debugging**:
    - Open Firefox and navigate to `about:debugging` in the address bar.
    - Click on "This Firefox" in the left sidebar.

3. **Load the Extension**:
    - Click on the "Load Temporary Add-on..." button.
    - In the file dialog, navigate to the project directory and select any file (e.g., `manifest.json`).

4. **Use the Extension**:
    - Once loaded, the extension will appear in the Firefox toolbar.
    - Click on the extension icon to open the popup.
    - Enter website URLs to block, separated by commas, and click "Add".
    - The websites added will be blocked, and you can manage the list from the popup.

## Files in the Project

- **manifest.json**: Defines the extension's metadata and permissions.
- **background.js**: Handles the blocking logic and communication with storage.
- **popup.html**: The user interface for adding and managing blocked sites.
- **popup.js**: Handles the UI interactions and updates the blocked sites list.
- **icons/**: Contains the icons used for the extension.

## Contributing

Feel free to raise a GitHub issue to report bug/improvement. Pull requests are welcome!

## License

This project is licensed under the MIT License.