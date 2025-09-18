import * as vscode from "vscode";
import { spawn } from "child_process";

function extFromLang(lang: string): string | undefined {
    const map: Record<string, string> = {
        javascript: "js",
        javascriptreact: "jsx",
        typescript: "ts",
        typescriptreact: "tsx",
        css: "css",
        html: "html",
        json: "json",
        jsonc: "jsonc",
        svg: "html",
    };
    return map[lang];
}

async function runDenoFmt(text: string, lang: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const ext = extFromLang(lang);
        const args = ["fmt"];
        if (ext) args.push("--ext", ext, "-");

        const p = spawn("deno", args, { stdio: ["pipe", "pipe", "pipe"] });
        let out = "", err = "";

        p.stdout.on("data", (d) => (out += d.toString()));
        p.stderr.on("data", (d) => (err += d.toString()));
        p.on("error", (e) => reject(e));
        p.on(
            "close",
            (code) => (code === 0 ? resolve(out) : reject(new Error(err))),
        );

        p.stdin.write(text);
        p.stdin.end();
    });
}

export function activate(context: vscode.ExtensionContext) {
    const selector: vscode.DocumentSelector = [
        { language: "typescript", scheme: "file" },
        { language: "javascript", scheme: "file" },
        { language: "css", scheme: "file" },
        { language: "html", scheme: "file" },
        { language: "json", scheme: "file" },
        { language: "jsonc", scheme: "file" },
        { language: "svg", scheme: "file" },
    ];

    const provider = vscode.languages.registerDocumentFormattingEditProvider(
        selector,
        {
            provideDocumentFormattingEdits: async (document) => {
                try {
                    const formatted = await runDenoFmt(
                        document.getText(),
                        document.languageId,
                    );
                    if (formatted === document.getText()) return [];

                    const fullRange = new vscode.Range(
                        document.positionAt(0),
                        document.positionAt(document.getText().length),
                    );
                    return [vscode.TextEdit.replace(fullRange, formatted)];
                } catch (err) {
                    return [];
                }
            },
        },
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}
