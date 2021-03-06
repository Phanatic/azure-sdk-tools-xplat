// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .put('/storageclitest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e7848242-ac53-4bdf-9670-e82333f24a80',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2cf1a0fd-7cee-478f-b950-78b7b494da30',
  'x-ms-version': '2012-02-12',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Mon, 01 Jul 2013 03:58:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb48a95c-b399-480f-9aa5-3374b1cfc6b4',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/?comp=list&include=metadata')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"https://yaotest.blob.core.windows.net/\"><Containers><Container><Name>astoria-7233bbbf</Name><Url>https://yaotest.blob.core.windows.net/astoria-7233bbbf</Url><Properties><Last-Modified>Tue, 18 Jun 2013 09:17:36 GMT</Last-Modified><Etag>\"0x8D03A1BCE8C47FB\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>astoria-7233bbbf1</Name><Url>https://yaotest.blob.core.windows.net/astoria-7233bbbf1</Url><Properties><Last-Modified>Tue, 18 Jun 2013 09:19:41 GMT</Last-Modified><Etag>\"0x8D03A1C18E12E35\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>astoria-7233bbbf2</Name><Url>https://yaotest.blob.core.windows.net/astoria-7233bbbf2</Url><Properties><Last-Modified>Tue, 18 Jun 2013 09:20:23 GMT</Last-Modified><Etag>\"0x8D03A1C327C88E9\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>astoria-7233bbbf3</Name><Url>https://yaotest.blob.core.windows.net/astoria-7233bbbf3</Url><Properties><Last-Modified>Tue, 18 Jun 2013 09:22:06 GMT</Last-Modified><Etag>\"0x8D03A1C6F914A92\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>defabc</Name><Url>https://yaotest.blob.core.windows.net/defabc</Url><Properties><Last-Modified>Tue, 18 Jun 2013 07:22:48 GMT</Last-Modified><Etag>\"0x8D03A0BC53DD54F\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>defabcdd</Name><Url>https://yaotest.blob.core.windows.net/defabcdd</Url><Properties><Last-Modified>Tue, 18 Jun 2013 07:22:55 GMT</Last-Modified><Etag>\"0x8D03A0BC970B9E3\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>download</Name><Url>https://yaotest.blob.core.windows.net/download</Url><Properties><Last-Modified>Mon, 24 Jun 2013 06:47:08 GMT</Last-Modified><Etag>\"0x8D03EBDC7F5A701\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>storageclitest</Name><Url>https://yaotest.blob.core.windows.net/storageclitest</Url><Properties><Last-Modified>Mon, 01 Jul 2013 03:58:38 GMT</Last-Modified><Etag>\"0x8D0442666B234CD\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test</Name><Url>https://yaotest.blob.core.windows.net/test</Url><Properties><Last-Modified>Tue, 18 Jun 2013 04:06:49 GMT</Last-Modified><Etag>\"0x8D039F06436451A\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test1</Name><Url>https://yaotest.blob.core.windows.net/test1</Url><Properties><Last-Modified>Fri, 07 Jun 2013 09:11:39 GMT</Last-Modified><Etag>\"0x8D03176279E7B72\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test2</Name><Url>https://yaotest.blob.core.windows.net/test2</Url><Properties><Last-Modified>Thu, 02 May 2013 11:43:42 GMT</Last-Modified><Etag>\"0x8D015416E4D5052\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test3</Name><Url>https://yaotest.blob.core.windows.net/test3</Url><Properties><Last-Modified>Mon, 27 May 2013 03:31:12 GMT</Last-Modified><Etag>\"0x8D028A1C54F054B\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test345</Name><Url>https://yaotest.blob.core.windows.net/test345</Url><Properties><Last-Modified>Mon, 17 Jun 2013 05:45:43 GMT</Last-Modified><Etag>\"0x8D039350A8F4FE8\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test4</Name><Url>https://yaotest.blob.core.windows.net/test4</Url><Properties><Last-Modified>Mon, 27 May 2013 03:31:28 GMT</Last-Modified><Etag>\"0x8D028A1CF0B160B\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test5</Name><Url>https://yaotest.blob.core.windows.net/test5</Url><Properties><Last-Modified>Thu, 02 May 2013 11:43:42 GMT</Last-Modified><Etag>\"0x8D015416E4D9E72\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>test6</Name><Url>https://yaotest.blob.core.windows.net/test6</Url><Properties><Last-Modified>Thu, 13 Jun 2013 05:29:11 GMT</Last-Modified><Etag>\"0x8D0360E11DF1D0A\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>testabc</Name><Url>https://yaotest.blob.core.windows.net/testabc</Url><Properties><Last-Modified>Mon, 17 Jun 2013 05:41:37 GMT</Last-Modified><Etag>\"0x8D0393477FEB50E\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container><Container><Name>upload</Name><Url>https://yaotest.blob.core.windows.net/upload</Url><Properties><Last-Modified>Thu, 27 Jun 2013 09:53:24 GMT</Last-Modified><Etag>\"0x8D041334C94842B\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4639d9aa-a6bd-4901-82a6-c065e04d417f',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/astoria-7233bbbf?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 09:17:36 GMT',
  etag: '"0x8D03A1BCE8C47FB"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0ceaaeb3-2b69-40ad-a7c5-7565cd72f85d',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/astoria-7233bbbf1?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 09:19:41 GMT',
  etag: '"0x8D03A1C18E12E35"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9fb94ce6-56ae-42f5-bc0f-e975f8945bff',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/astoria-7233bbbf2?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 09:20:23 GMT',
  etag: '"0x8D03A1C327C88E9"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '54d6cebf-6400-4e8f-8178-2617f711bf04',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/astoria-7233bbbf3?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 09:22:06 GMT',
  etag: '"0x8D03A1C6F914A92"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7ba32fde-ec5b-4e2a-a043-1da2e45f5c45',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/defabc?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 07:22:48 GMT',
  etag: '"0x8D03A0BC53DD54F"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3e0d4bc3-4dca-4556-9bb3-c4d358d276eb',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/defabcdd?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 07:22:55 GMT',
  etag: '"0x8D03A0BC970B9E3"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a6061edc-c3a3-48d9-ba06-3b1ce6eb6e6a',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/download?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 24 Jun 2013 06:47:08 GMT',
  etag: '"0x8D03EBDC7F5A701"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '06482880-362c-4a42-954b-6d50160f6009',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '61cebf8e-878d-4900-a9bd-86d294deb58a',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 18 Jun 2013 04:06:49 GMT',
  etag: '"0x8D039F06436451A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f8093cbb-5bf9-47b3-9784-f50ff0456eca',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'container',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test1?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 07 Jun 2013 09:11:39 GMT',
  etag: '"0x8D03176279E7B72"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '56eb0cdd-1c24-4d1c-b756-efb3829fddf9',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'container',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test2?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 02 May 2013 11:43:42 GMT',
  etag: '"0x8D015416E4D5052"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e0527dc8-4919-4cdf-8475-fe88a7d375e7',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'blob',
  date: 'Mon, 01 Jul 2013 03:58:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test3?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 27 May 2013 03:31:12 GMT',
  etag: '"0x8D028A1C54F054B"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '66c60553-016d-44d9-826b-f2816fea9fae',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test345?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 17 Jun 2013 05:45:43 GMT',
  etag: '"0x8D039350A8F4FE8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '03cf6fd0-e787-44b3-a999-c3ef0eeffb75',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test4?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 27 May 2013 03:31:28 GMT',
  etag: '"0x8D028A1CF0B160B"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0943c0e4-d905-4a4b-bab8-32f94470f776',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'container',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test5?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 02 May 2013 11:43:42 GMT',
  etag: '"0x8D015416E4D9E72"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2fc5a7e9-5347-4819-a32a-e332df60ec41',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'blob',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/test6?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 13 Jun 2013 05:29:11 GMT',
  etag: '"0x8D0360E11DF1D0A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '179efefc-2a89-443e-ba0c-2b76339fafa5',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'container',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/testabc?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 17 Jun 2013 05:41:37 GMT',
  etag: '"0x8D0393477FEB50E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0e8310c1-ec6d-4f7b-b58e-619dbde42cce',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/upload?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 27 Jun 2013 09:53:24 GMT',
  etag: '"0x8D041334C94842B"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5d39717a-1081-441d-bde7-181f9b0e5bd0',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/?comp=list&prefix=storageclitest&include=metadata')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"https://yaotest.blob.core.windows.net/\"><Prefix>storageclitest</Prefix><Containers><Container><Name>storageclitest</Name><Url>https://yaotest.blob.core.windows.net/storageclitest</Url><Properties><Last-Modified>Mon, 01 Jul 2013 03:58:38 GMT</Last-Modified><Etag>\"0x8D0442666B234CD\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4bd085c3-5a28-41c4-bf69-4ebddc1ba9bb',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0aed0901-a1b4-446f-a3a4-313348163aa6',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:42 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2f776fd-a846-44c4-be68-13705eaeba89',
  'x-ms-version': '2012-02-12',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Mon, 01 Jul 2013 03:58:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 01 Jul 2013 03:58:38 GMT',
  etag: '"0x8D0442666B234CD"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5072d2c0-424a-4d69-99c4-7e3860d4558b',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=acl')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 01 Jul 2013 03:58:41 GMT',
  etag: '"0x8D0442668A3A185"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '38d06027-1a82-40ca-80af-d3043ac4417e',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 01 Jul 2013 03:58:41 GMT',
  etag: '"0x8D0442668A3A185"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '920d39b7-50c1-4d02-827a-804ef42a7e7a',
  'x-ms-version': '2012-02-12',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Mon, 01 Jul 2013 03:58:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Mon, 01 Jul 2013 03:58:41 GMT',
  etag: '"0x8D0442668A3A185"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bfbde279-f646-44c1-94c8-f8bd64fd6ff5',
  'x-ms-version': '2012-02-12',
  'x-ms-blob-public-access': 'container',
  date: 'Mon, 01 Jul 2013 03:58:42 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://yaotest.blob.core.windows.net:443')
  .delete('/storageclitest?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b58968a5-0402-4cb6-8917-87ac5f979ab7',
  'x-ms-version': '2012-02-12',
  date: 'Mon, 01 Jul 2013 03:58:42 GMT' });
 return result; }]];