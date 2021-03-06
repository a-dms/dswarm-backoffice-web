'use strict';

angular.module('mockedTargetSchema', [])
    .value('mockTargetSchemaJSON', {
        "title": "OAI-PMH",
        "type": "object",
        "properties": {
            "dc:title": {"type": "string"},
            "dc:creator": {"type": "string"},
            "dc:subject": {"type": "string"},
            "dc:description": {"type": "string"},
            "dc:publisher": {"type": "string"},
            "dc:contributor": {"type": "string"},
            "dc:date": {"type": "string"},
            "dc:type": {"type": "string"},
            "dc:format": {"type": "string"},
            "dc:identifier": {"type": "string"},
            "dc:source": {"type": "string"},
            "dc:language": {"type": "string"},
            "dc:relation": {"type": "string"},
            "dc:coverage": {"type": "string"},
            "dc:rights": {"type": "string"}
        }
    });