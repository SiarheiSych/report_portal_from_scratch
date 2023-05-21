import Mocha from 'mocha';
import options from './config/mochaConfig.json';
import path from 'path';
import { applyTimeouts } from './config/utils';

function runMocha(file: string) {
  const mocha = new Mocha();

  applyTimeouts(mocha, options.timeout);

  mocha.addFile(path.join(__dirname, file));
  mocha
    .run()
    .on('test', function (test) {
      console.log('Test started: ' + test.title);
    })
    .on('test end', function (test) {
      console.log('Test done: ' + test.title);
    })
    .on('pass', function (test) {
      console.log('Test passed');
      console.log(test);
    })
    .on('fail', function (test, err) {
      console.log('Test fail');
      console.log(test);
      console.log(err);
    });
}

runMocha('../test/specs/example.e2e.ts');
