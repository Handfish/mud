import { ChangeEvent, watch } from "@kudovs/turbowatch";
import { CustomChokidarWatcher } from "./customChokidarWatcher";
import { getWorkspaceRoot } from "workspace-tools";

const cwd = process.cwd();
const workspaceRoot = getWorkspaceRoot(cwd);
const start = Date.now();
const unwatchArray: string[] = [];

watch({
  project: workspaceRoot!,
  Watcher: CustomChokidarWatcher,
  triggers: [
    {
      expression: [
        "allof",
        [
          "allof",
          ["not", ["dirname", "node_modules"]],
          ["not", ["dirname", ".turbo"]],
          ["not", ["dirname", "dist"]],
          ["not", ["dirname", "out"]],
          ["not", ["dirname", "abi"]],
          ["not", ["dirname", "types"]],
          ["not", ["dirname", "build"]],
          ["not", ["dirname", "bin"]],
          ["not", ["dirname", "protoc"]],
          ["not", ["dirname", "protobuf"]],
          ["not", ["dirname", "src/mud-definitions"]],
          ["not", ["dirname", ".parcel-cache"]],
        ],
        // ["anyof", ...depPaths.map((dir) => ["dirname", dir] satisfies Expression)],
        // ["anyof", ["dirname", "packages/store"]],
        ["anyof", ["match", "*.sol", "basename"]],
      ],
      name: `turbowatch_sol`,
      interruptible: true,
      initialRun: true,
      persistent: true,
      onChange: async ({ spawn, files, first, abortSignal, watcher }: ChangeEvent) => {
        if (first) {
          console.log("Turbowatch started in", Date.now() - start, "ms");
        } else {
          console.log(
            "File change detected",
            files.map((f) => f.name)
          );
        }
        console.log("Building workspace dependencies");

        const filenameTokens = files[0].name.split("/");
        const index = filenameTokens.lastIndexOf("packages");
        const changedWorkspace = filenameTokens[index + 1];

        const packagePath = filenameTokens.slice(0, index + 2).join("/");
        console.log(packagePath);

        watcher?.unwatch?.(packagePath);
        unwatchArray.push(packagePath);
        console.log("unwatch " + packagePath);

        await spawn`turbo build --filter=${changedWorkspace}`.then(() => {
          unwatchArray.forEach((element) => {
            watcher?.add?.(element);
          });
          console.log("watch " + packagePath);
        });

        if (abortSignal?.aborted) return;
      },
    },
  ],
});
