/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var should = require('should');

var CLITest = require('../framework/cli-test');
var suite = new CLITest();

describe('cli', function () {
  describe('account env', function () {
    before(function (done) {
      suite.execute('node cli.js account env delete newenv --json', function () {
        done();
      });
    });

    it('should add and show', function (done) {
      cmd = 'node cli.js account env add newenv --publish-settings-file-url http://url1.com ' +
        '--management-portal-url http://url2.com --service-endpoint http://url3.com ' +
        '--storage-endpoint http://url4.com --sql-database-endpoint http://url5.com --json';

      suite.execute(cmd, function (result) {
        result.exitStatus.should.equal(0);

        suite.execute('account env show newenv --json', function (result) {
          result.exitStatus.should.equal(0);

          var environment = JSON.parse(result.text);
          environment['publishingProfile'].should.equal('http://url1.com');
          environment['portal'].should.equal('http://url2.com');
          environment['serviceEndpoint'].should.equal('http://url3.com');
          environment['storageEndpoint'].should.equal('http://url4.com');
          environment['sqlDatabaseEndpoint'].should.equal('http://url5.com');

          done();
        });
      });
    });

    it('should list', function (done) {
      suite.execute('account env list --json', function (result) {
        result.exitStatus.should.equal(0);

        var environments = JSON.parse(result.text);
        should.exist(Object.keys(environments).filter(function (e) {
          return e === 'AzureCloud';
        })[0]);

        should.exist(Object.keys(environments).filter(function (e) {
          return e === 'AzureChinaCloud';
        })[0]);

        should.exist(Object.keys(environments).filter(function (e) {
          return e === 'newenv';
        })[0]);

        done();
      });
    });

    it('should delete', function (done) {
      suite.execute('account env delete newenv --json', function (result) {
        result.exitStatus.should.equal(0);

        suite.execute('account env list --json', function (result) {
          result.exitStatus.should.equal(0);

          var environments = JSON.parse(result.text);
          should.not.exist(Object.keys(environments).filter(function (e) {
            return e === 'newenv';
          })[0]);

          done();
        });
      });
    });
  });
});