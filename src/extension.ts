import * as vscode from 'vscode';

let yoloInterval: NodeJS.Timeout | undefined;
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
    const commands = [
        'gemini.diff.accept',
        'geminicodeassist.codelens.accept',
        'gemini.agent.acceptAgentStep',
        'antigravity.agent.acceptAgentStep'
    ];

    for (const cmd of commands) {
        try {
            await vscode.commands.executeCommand(cmd);
            return; // Exit on the first successful command
        } catch {
            // Ignore error and try the next command
        }
    }
}

export function deactivate() {
    stopYoloMode();
}
