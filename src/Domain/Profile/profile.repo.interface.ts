import {
  Create,
  Update,
  FindOne,
  // Remove,
  // FindAll,
  // FindDrafts,
} from './useCases';

export interface ProfileRepoInterface extends Create, Update, FindOne {}
