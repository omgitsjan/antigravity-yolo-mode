import * as vscode from 'vscode';

let yoloInterval: NodeJS.Timer | undefined;
let isYoloActive = false;
const YOLO_CHECK_INTERVAL_MS = 2000;

export function activate(context: vscode.ExtensionContext) {
    console.log('🏎️ YOLO Mode Loaded');
    startYoloMode();

    context.subscriptions.push(
        vscode.commands.registerCommand('yolo.toggle', () => {
            if (isYoloActive) {
                stopYoloMode();
                vscode.window.showInformationMessage('🛑 YOLO Mode OFF');
            } else {
                startYoloMode();
                vscode.window.showInformationMessage('🏎️ YOLO Mode ON');
            }
        })
    );
}

function startYoloMode() {
    if (isYoloActive) return;
    isYoloActive = true;
    yoloInterval = setInterval(async () => {
        await safeAccept();
    }, YOLO_CHECK_INTERVAL_MS);
    console.log('🏎️ YOLO: Started');
}

function stopYoloMode() {
    isYoloActive = false;
    if (yoloInterval) {
        clearInterval(yoloInterval);
        yoloInterval = undefined;
    }
    console.log('🛑 YOLO: Stopped');
}

async function safeAccept() {
    try {
        await vscode.commands.executeCommand('antigravity.agent.acceptAgentStep');
    } catch { }
}

export function deactivate() {
    stopYoloMode();
}
