import Mocha from 'mocha';
import options from './config/mochaConfig.json';
import path from 'path';
import { applyTimeouts, applyFiles } from './config/utils';

function runMocha(file: string) {
  const mocha = new Mocha(options);

  applyTimeouts(mocha, options.timeout);
  applyFiles(mocha, options.file);

  mocha.addFile(path.join(__dirname, file));
  mocha.run();
}

runMocha('../test/specs/example.e2e.ts');
