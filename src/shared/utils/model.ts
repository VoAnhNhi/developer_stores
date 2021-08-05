import * as _ from 'lodash'

export class ModelUtils {
  static updateModel(model: any, updatedData: any, options = {}): any {
    let ignoreNull = _.get(options, ['ignoreNull'])
    let ignoreProps = _.get(options, ['ignoreProps'], [])
    if (_.isNil(ignoreNull)) {
      ignoreNull = true
    }
    if (_.isNil(ignoreProps)) {
      ignoreProps = []
    }

    Object.getOwnPropertyNames(updatedData).forEach((propName: string) => {
      if (!ignoreProps.includes(propName) && (!ignoreNull || !_.isNil(updatedData[propName]))) {
        model[propName] = updatedData[propName]
      }
    })
    return model
  }
}
