const groups = require('./fieldDefinitions/gaGroups');
const _ = require('lodash');
const entitiesWithExcludedGroups = require('./fieldDefinitions/gaEntities');

class GoogleAnalyticsFieldsParserHelper{
    static getDataType(attributes){
        if(attributes.type === 'METRIC'){
            return 'number';
        }
        else{
            if (attributes.uiName !== 'Date'){
                return 'string';
            }
            return 'date';
        }
    }

    static isMetric(attributes){
        if(attributes.type === 'METRIC'){
            return true;
        }
        return false;
    }

    static isPrimaryDate(attributes){
        if (attributes.uiName === 'Date'){
            return true;
        }
        return false;
    }

    static getExcludedFields(id){
        let fields = [];
        let entity = entitiesWithExcludedGroups[id];
        let groupsFields = [];

        _.forEach(entity.excludedGroups, (group)=>{
            _.forIn(groups[group],(groupItem, key)=>{
                if(!_.includes(groupsFields,key)){
                    groupsFields.push(key)
                }
            })
        });
        _.forIn(entitiesWithExcludedGroups,(field,fieldName)=>{
            if(field.excludedGroups.length !== 0){

                let isInGroup = _.includes(groupsFields, fieldName);
                if(!isInGroup && fieldName !== id){
                    fields.push(_.upperFirst(_.camelCase(fieldName.replace(/ga:/g,''))));
                }
            }
        });

        return fields;
    }

}

module.exports = GoogleAnalyticsFieldsParserHelper;