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

var __ = require('underscore');
var util = require('util');

var interaction = require('../util/interaction');
var utils = require('../util/utils');

exports.init = function (cli) {

  var log = cli.output;
  var site = cli.category('site');
  var siteDefaultDocument = site.category('defaultdocument')
    .description('Commands to manage your Web Site default documents');

  siteDefaultDocument.command('list [name]')
    .usage('[options] [name]')
    .description('Show your site default documents')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      site.lookupSiteNameAndWebSpace(context, _);

      var siteConfigurations = site.doSiteConfigGet(context, _);
      siteConfigurations.DefaultDocuments = getDefaultDocuments(siteConfigurations.DefaultDocuments);
      interaction.formatOutput(cli, siteConfigurations.DefaultDocuments['a:string'], function (data) {
        if (data.length > 0) {
          log.table(data, function (row, item) {
            row.cell('Name', item);
          });
        } else {
          log.info('No default documents defined yet.');
        }
      });
    });

  siteDefaultDocument.command('add [document] [name]')
    .usage('[options] <document> [name]')
    .description('Add a site default document (by default, to the end of the list)')
    .option('-d, --document <document>', 'the new default document')
    .option('-p, --position <position>', 'the position of the new default document')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (document, name, options, _) {
      if (options.document) {
        name = document;
        document = undefined;
      }

      var params = utils.normalizeParameters({
        document: [document, options.document]
      });

      if (params.err) { throw params.err; }

      document = interaction.promptIfNotGiven(cli, 'Document: ', params.values.document, _);

      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      site.lookupSiteNameAndWebSpace(context, _);

      var siteConfigurations = site.doSiteConfigGet(context, _);
      siteConfigurations.DefaultDocuments = getDefaultDocuments(siteConfigurations.DefaultDocuments);

      if (siteConfigurations.DefaultDocuments['a:string'].indexOf(document) > -1) {
        throw new Error('Duplicate default document');
      }

      if (options.position) {
        if (options.position > siteConfigurations.DefaultDocuments['a:string'].length) {
          throw new Error(util.format('Provided position %s is larger than current default document number %s', options.position, siteConfigurations.DefaultDocuments['a:string'].length));
        } else {
          siteConfigurations.DefaultDocuments['a:string'].splice(options.position, 0, document);
        }
      } else {
        siteConfigurations.DefaultDocuments['a:string'].push(document);
      }

      site.doSiteConfigPUT(siteConfigurations, context, _);
    });

  siteDefaultDocument.command('delete [document] [name]')
    .usage('[options] <document> [name]')
    .description('Deletes a site default document')
    .option('-d, --document <document>', 'the new default document')
    .option('-q, --quiet', 'quiet mode, do not ask for delete confirmation')
    .option('-s, --subscription <id>', 'use the subscription id')
    .execute(function (document, name, options, _) {
      if (options.document) {
        name = document;
        document = undefined;
      }

      var params = utils.normalizeParameters({
        document: [document, options.document]
      });

      if (params.err) { throw params.err; }

      document = interaction.promptIfNotGiven(cli, 'Document: ', params.values.document, _);

      if (!options.quiet && !interaction.confirm(cli, util.format('Delete %s default document? (y/n) ', document), _)) {
        return;
      }

      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: { name: name }
      };

      site.lookupSiteNameAndWebSpace(context, _);
      var siteConfigurations = site.doSiteConfigGet(context, _);

      var found = false;
      if (siteConfigurations.DefaultDocuments && siteConfigurations.DefaultDocuments['a:string']) {
        siteConfigurations.DefaultDocuments = getDefaultDocuments(siteConfigurations.DefaultDocuments);

        for (var i = 0; i < siteConfigurations.DefaultDocuments['a:string'].length; i++) {
          if (utils.ignoreCaseEquals(siteConfigurations.DefaultDocuments['a:string'][i], document)) {
            siteConfigurations.DefaultDocuments['a:string'].splice(i, 1);
            found = true;
            i--;
          }
        }

        if (found) {
          if (siteConfigurations.DefaultDocuments['a:string'].length === 0) {
            siteConfigurations.DefaultDocuments = { };
          }

          site.doSiteConfigPUT(siteConfigurations, context, _);
        }
      }

      if (!found) {
        throw new Error(util.format('Default document "%s" does not exist.', document));
      }
    });

  function getDefaultDocuments(defaultDocuments) {
    if (!defaultDocuments) {
      defaultDocuments = {
        '$': {
          'xmlns:a': 'http://schemas.microsoft.com/2003/10/Serialization/Arrays'
        }
      };
    }

    if (!defaultDocuments['a:string']) {
      defaultDocuments['a:string'] = [ ];
    } else if (!__.isArray(defaultDocuments['a:string'])) {
      defaultDocuments['a:string'] = [ defaultDocuments['a:string'] ];
    }

    return defaultDocuments;
  }
};