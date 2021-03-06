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

var utils = require('../util/utils');

var REQUIRED_API_VERSION = '2012-08-01';

// Testing commands to register and unregister providers. Not useful in day to day
// azure usage.

exports.init = function (cli) {
  'use strict';

  if (!process.env.AZURE_CLI_TEST_COMMANDS) {
    return;
  }

  var log = cli.output;
  var account = cli.category('account');

  var provider = cli.category('provider')
    .description('Commands to register and unregister providers with your subscription');

  provider.command('register')
    .description('register a resource provider')
    .usage('[options] <resourceName>')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (resourceName, options, cb) {
      var service = utils.createServiceManagementService(
        account.lookupSubscriptionId(options.subscription),
        account, log, REQUIRED_API_VERSION);

      var progress = cli.progress('Registering resource ' + resourceName);

      service.registerResourceProvider(resourceName, function (err) {
        progress.end();
        cb(err);
      });
    });

  provider.command('unregister')
    .description('unregister a resource provider')
    .usage('[options] <resourceName>')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (resourceName, options, cb) {
      var service = utils.createServiceManagementService(
        account.lookupSubscriptionId(options.subscription),
        account, log, REQUIRED_API_VERSION);

      var progress = cli.progress('Unregistering resource ' + resourceName);

      service.unregisterResourceProvider(resourceName, function (err) {
        progress.end();
        cb(err);
      });
    });

  provider.command('list')
    .description('list known providers registered for this subscription')
    .usage('[options]')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (options, cb) {
      var service = utils.createServiceManagementService(
        account.lookupSubscriptionId(options.subscription),
        account, log, REQUIRED_API_VERSION);

      var progress = cli.progress('Listing registered resource types');

      service.listResourceTypes(account.knownResourceTypes(), function (err, resources) {
        progress.end();
        log.table(resources, function (row, s) {
          row.cell('Type', s.type);
          row.cell('Is Registered', s.state);
        });
        cb(err);
      });
    });
};