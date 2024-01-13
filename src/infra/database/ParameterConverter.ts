import { Op } from "sequelize";
import { AdvancedSearch, IGetManyParams } from "./interfaces/IParams";

export class ParameterConverter {
  convert(param: IFindMany | IFindOne) {
    const obj = {
      where: {},
      select: {},
    };
    obj.select = param.select;
    if (param.limit) {
      obj["take"] = param.limit;
    }
    if (param.offset) {
      obj["skip"] = param.offset;
    }
    delete param.limit;
    delete param.select;
    delete param.offset;

    if (param.conditionalSearch) {
      obj.where[Op.or] = [];
      const list = obj.where[Op.or] as Array<any>;
      for (const key in param.conditionalSearch) {
        if (typeof param[key] !== "object") {
          list.push({ [key]: param.conditionalSearch[key] });
          continue;
        }

        if (param[key]?.similar) {
          const insensitive = param.conditionalSearch[key].insensitive;
          if (insensitive) {
            list.push({
              [key]: { [Op.iLike]: `${param.conditionalSearch[key].value}%` },
            });
          } else {
            list.push({
              [key]: { [Op.like]: `${param.conditionalSearch[key].value}%` },
            });
          }
          return;
        }

        list.push({ [key]: { [Op.like]: param.conditionalSearch[key] } });
      }
      return obj;
    }

    for (const key in param) {
      if (typeof param[key] !== "object") {
        obj.where[key] = param[key];
        continue;
      }
      if (param[key]?.similar) {
        const insensitive = param[key].insensitive;
        if (insensitive) {
          obj.where[key] = { [Op.iLike]: `${param[key].value}%` };
        } else {
          obj.where[key] = { [Op.like]: `${param[key].value}%` };
        }
        continue;
      }
      obj.where[key] = { [Op.like]: `${param[key].value}%` };
    }
    return obj;
  }
}
interface IFindOne extends AdvancedSearch<any> {}
interface IFindMany extends AdvancedSearch<any>, IGetManyParams {}
