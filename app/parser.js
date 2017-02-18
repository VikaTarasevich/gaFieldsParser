const _ = require('lodash');
const entitiesWithFullDescription = require('./fieldDefinitions/gaEntitiesForUI').items;
const parserHelper = require('./parserHelper');
const entitiesWithExcludedGroups = require('./fieldDefinitions/gaEntities');

class GoogleAnalyticsFieldsParser{

    static parse(){

        let filteredEntities = _.filter(entitiesWithFullDescription, (value)=>{
           let entity = entitiesWithExcludedGroups[value.id];
            if(_.isEmpty(entity.excludedGroups)){
                return false;
            }else{
                return true;
            }
        });

        let result = _.map(filteredEntities,(value,key)=>{

            let fieldInfo = {
                name : value.attributes.uiName,
                dataType: parserHelper.getDataType(value.attributes),
                metric: parserHelper.isMetric(value.attributes),
                primaryDate: parserHelper.isPrimaryDate(value.attributes),
                fieldName: _.upperFirst(_.camelCase(value.id.replace(/ga:/g,''))),
                exclusiveFields: parserHelper.getExcludedFields(value.id)
            }
            return fieldInfo;
        });
        let stringResult = JSON.stringify(result, null, 4);
        return stringResult;
    }


}

module.exports = GoogleAnalyticsFieldsParser;