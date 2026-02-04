# Antigravity YOLO Mode

🏎️ **Auto-accept agent steps in Antigravity for maximum development speed.**

![YOLO Mode Icon](icon.png)

## Features

- **Automatic Step Acceptance**: Automatically accepts Antigravity agent steps every 2 seconds
- **Toggle On/Off**: Easily enable/disable YOLO mode via command palette
- **Status Bar Indicator**: Visual feedback showing current YOLO mode state
- **Auto-Start**: Activates automatically when VS Code starts

## Installation

### From VSIX
1. Download the latest `.vsix` file
2. Open VS Code
3. Go to Extensions view (`Ctrl+Shift+X`)
4. Click the `...` menu → `Install from VSIX...`
5. Select the downloaded file

### From Marketplace
Search for "Antigravity YOLO Mode" in the VS Code Extensions Marketplace.

## Usage

### Toggle YOLO Mode
- Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
- Run: `YOLO: Toggle Auto-Accept`

### Status Bar
Check the bottom-right status bar:
- 🏎️ `YOLO: ON` - Auto-accepting enabled
- 🛑 `YOLO: OFF` - Auto-accepting disabled

## Requirements

- VS Code 1.80.0 or higher
- Antigravity extension installed

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch

# Package extension
npx vsce package
```

## License

MIT
