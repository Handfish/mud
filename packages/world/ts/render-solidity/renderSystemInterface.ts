import { renderArguments, renderList, renderedSolidityHeader, renderRelativeImports } from "@latticexyz/common/codegen";
import { RenderSystemInterfaceOptions } from "./types.js";

export function renderSystemInterface(options: RenderSystemInterfaceOptions) {
  const { imports, name, functionPrefix, functions } = options;

  return `${renderedSolidityHeader}

${renderRelativeImports(imports)}

interface ${name} {
  ${renderList(
    functions,
    ({ name, parameters, stateMutability, returnParameters }) => `
    function ${functionPrefix}${name}(
      ${renderArguments(parameters)}
    ) external ${stateMutability} ${renderReturnParameters(returnParameters)};
  `
  )}
}

`;
}

function renderReturnParameters(returnParameters: string[]) {
  if (returnParameters.length > 0) {
    return `returns (${renderArguments(returnParameters)})`;
  } else {
    return "";
  }
}
