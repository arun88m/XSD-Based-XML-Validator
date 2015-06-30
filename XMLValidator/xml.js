var fs = require('fs');
xml1 = '';
xsd1 = '';
fs.readFile("config-13.3.xsd", 'utf8', function(err, xsd) {
    xsd1 = xsd;
console.log(xsd1);
    fs.readFile("sample.xml", 'utf8', function(err, xml) {
        xml1 = xml;
    });
});
console.log(xsd1);
/*
        libxmljs = require('libxmljs');
        xmlDoc = libxmljs.parseXML(xml);
        xsdDOc = libxmljs.parseXML(xsd);

        var result = xmlDoc.validate(xsdDoc);
        console.log(result);
        */
