import { Create, Remove, Update, FindAll, FindOne } from './useCases';

export interface FollowRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne {}
