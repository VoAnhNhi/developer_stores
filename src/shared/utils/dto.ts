import * as _ from 'lodash'

export class DtoUtils {
  static transformModelToDto(modelData: any, DtoClass: any): any {
    if (_.isNil(modelData)) {
      return null
    }
    const props = Object.getOwnPropertyNames(_.get(modelData, 'dataValues', {}))
    const destInstant = new DtoClass()
    props.forEach((propName: string) => {
      if (!_.isUndefined(destInstant[propName])) {
        destInstant[propName] = modelData[propName]
      }
    })
    return destInstant
  }

  static transformDtoToModel(dtoData: any, ModelClass: any): any {
    if (_.isNil(dtoData)) {
      return null
    }
    const props = Object.getOwnPropertyNames(dtoData)
    const destInstant = new ModelClass()
    props.forEach((propName: string) => {
      destInstant[propName] = dtoData[propName]
    })
    return destInstant
  }

  static transformRowToDto(rowData: any, DtoClass: any): any {
    if (_.isNil(rowData)) {
      return null
    }
    const props = Object.getOwnPropertyNames(rowData)
    const destInstant = new DtoClass()
    props.forEach((propName: string) => {
      if (!_.isUndefined(destInstant[propName])) {
        destInstant[propName] = rowData[propName]
      }
    })
    return destInstant
  }
}
