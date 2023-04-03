import {
  Create,
  Remove,
  Update,
  FindAll,
  FindOne,
  FindByName,
} from './useCases';

export interface TagRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne,
    FindByName {}
