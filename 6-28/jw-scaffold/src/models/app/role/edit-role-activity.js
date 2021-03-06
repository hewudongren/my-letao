/**
 * /app/role/edit/:id 角色
 * 
 * @author gill
 * @date 2018-05-02
 */

import inherit from 'jw_common/inherit'
import AbstractModel from 'jw_models/abstract'

let RoleActivityModel = inherit(AbstractModel, {
  initialization() {

    this.url = `${Jw.gateway}/platform/public/data/permission-activities`
    this.query = {
      id: '',
      roleId: ''
    }
    this.type = 'get'
  },

  dataFormat(data) {

    return data.result
  },

  execute(query) {

    _.extend(this.query,query)
    return this.exec()
  }
})

export default new RoleActivityModel()
