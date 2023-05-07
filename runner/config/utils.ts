export function applyTimeouts(mocha: Mocha, timeout?: number) {
    if (timeout !== undefined) {
      mocha.suite.timeout(timeout);
    }
  }

  export function applyFiles(mocha: Mocha, files: string | string[]) {
    const fileList: string[] = Array.isArray(files) ? files : [files];
  
    if(fileList) {
      mocha.files = fileList.concat(mocha.files);
    }
  }