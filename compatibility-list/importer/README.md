## Importer

This function is (currently) intended to be run locally to import all of the Compatibility List issues into DynamoDB. It should really only need to be run once, as webhooks will be used to update the DB on changes/new issues. But it should be re-runnable. Particularly since Webhooks could go down or something. It's also pretty likely that this first import will take way more API calls than will be allowed at once. So there might be some need to store some data locally so you can do an import in multiple parts (runs).
