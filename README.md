# AdGuard Card v1.0.0

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)
Initial release of the AdGuard Card for Home Assistant

Features:

- Display DNS query statistics
- Show blocking ratio and processing speed
- Toggle AdGuard protection features
- Expandable section for additional statistics
- Responsive design that adapts to your theme

## Installation

After installation, add the following to your Lovelace configuration:

````yaml
type: custom:adguard-card
````

## Features

- Display DNS query statistics
- Show blocking ratio and processing speed
- Toggle AdGuard protection features
- Expandable section for additional statistics
- Responsive design that adapts to your theme

## Installation

### HACS (Recommended)

1. Make sure you have [HACS](https://hacs.xyz) installed
2. Go to HACS > Frontend
3. Click on the 3 dots in the top right corner
4. Select "Custom repositories"
5. Add this repository URL and select "Lovelace" as the category
6. Click "Add"
7. Find "AdGuard Card" in the Frontend section and click "Download"

### Manual Installation

1. Download `adguard-card.js` from the latest release
2. Copy it to your `www/community/adguard-card/` folder
3. Add the following to your Lovelace resources:

```yaml
   resources:
     - url: /hacsfiles/adguard-card/adguard-card.js
       type: module
````

## Usage

Add the card to your dashboard:

```yaml
type: custom:adguard-card
```

## Required Home Assistant Components

- AdGuard Home integration

## Support

If you have any issues or feature requests, please [open an issue](https://github.com/yourusername/adguard-card/issues).
