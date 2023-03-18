import { Create, Remove, Update, FindAll, FindOne } from './useCases';

export interface TagRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne {}
